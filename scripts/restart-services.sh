#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PIDS_DIR="$ROOT_DIR/pids"
LOGS_DIR="$ROOT_DIR/logs"

SERVER_PID_FILE="$PIDS_DIR/dev-server.pid"
CLIENT_PID_FILE="$PIDS_DIR/dev-client.pid"
SERVER_LOG_FILE="$LOGS_DIR/dev-server.log"
CLIENT_LOG_FILE="$LOGS_DIR/dev-client.log"

SERVER_PORT=3001
CLIENT_PORT=
STOP_ONLY=0

log() {
  printf '[restart] %s\n' "$*"
}

warn() {
  printf '[restart] %s\n' "$*" >&2
}

usage() {
  cat <<'EOF'
Usage: ./scripts/restart-services.sh [--stop]

Stops the existing HireClaw dev services and restarts them in the background.

Options:
  --stop    Stop the managed services without starting them again
EOF
}

load_root_env() {
  local env_file
  env_file="$ROOT_DIR/.env"

  if [[ -f "$env_file" ]]; then
    set -a
    # shellcheck disable=SC1090
    source "$env_file"
    set +a
  fi
}

derive_client_port() {
  if [[ -n "${CLIENT_PORT:-}" ]]; then
    printf '%s\n' "$CLIENT_PORT"
    return 0
  fi

  if [[ -n "${FRONTEND_URL:-}" && "$FRONTEND_URL" =~ :([0-9]+)(/|$) ]]; then
    printf '%s\n' "${BASH_REMATCH[1]}"
    return 0
  fi

  printf '5173\n'
}

get_pid_from_file() {
  local pid_file
  pid_file="$1"

  if [[ -f "$pid_file" ]]; then
    tr -d '[:space:]' < "$pid_file"
  fi
}

get_process_cwd() {
  local pid
  pid="$1"

  lsof -a -p "$pid" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p' | head -n 1
}

process_belongs_to_repo() {
  local pid cwd command_line
  pid="$1"
  cwd="$(get_process_cwd "$pid" || true)"

  if [[ -n "$cwd" && "$cwd" == "$ROOT_DIR"* ]]; then
    return 0
  fi

  command_line="$(ps -p "$pid" -o command= 2>/dev/null || true)"
  [[ "$command_line" == *"$ROOT_DIR"* ]]
}

collect_descendants() {
  local pid child
  pid="$1"

  while IFS= read -r child; do
    [[ -n "$child" ]] || continue
    collect_descendants "$child"
    printf '%s\n' "$child"
  done < <(pgrep -P "$pid" 2>/dev/null || true)
}

stop_process_tree() {
  local pid label target attempt still_running
  local descendants=()

  pid="$1"
  label="$2"

  if ! kill -0 "$pid" 2>/dev/null; then
    return 0
  fi

  while IFS= read -r target; do
    [[ -n "$target" ]] || continue
    descendants+=("$target")
  done < <(collect_descendants "$pid")

  for target in "${descendants[@]}" "$pid"; do
    kill -TERM "$target" 2>/dev/null || true
  done

  still_running=0
  attempt=0

  while (( attempt < 30 )); do
    still_running=0

    for target in "${descendants[@]}" "$pid"; do
      if kill -0 "$target" 2>/dev/null; then
        still_running=1
        break
      fi
    done

    if (( still_running == 0 )); then
      return 0
    fi

    sleep 1
    attempt=$((attempt + 1))
  done

  warn "$label did not stop cleanly, forcing it down"

  for target in "${descendants[@]}" "$pid"; do
    kill -KILL "$target" 2>/dev/null || true
  done
}

stop_service_from_pid_file() {
  local name pid_file pid
  name="$1"
  pid_file="$2"
  pid="$(get_pid_from_file "$pid_file")"

  if [[ -z "$pid" ]]; then
    rm -f "$pid_file"
    return 0
  fi

  if [[ ! "$pid" =~ ^[0-9]+$ ]]; then
    warn "Ignoring invalid pid file for $name: $pid_file"
    rm -f "$pid_file"
    return 0
  fi

  if kill -0 "$pid" 2>/dev/null; then
    log "Stopping $name from pid file ($pid)"
    stop_process_tree "$pid" "$name"
  fi

  rm -f "$pid_file"
}

stop_service_from_port() {
  local name port pid
  name="$1"
  port="$2"

  while IFS= read -r pid; do
    [[ -n "$pid" ]] || continue

    if process_belongs_to_repo "$pid"; then
      log "Stopping $name on port $port ($pid)"
      stop_process_tree "$pid" "$name"
    else
      warn "Skipping pid $pid on port $port because it does not appear to belong to $ROOT_DIR"
    fi
  done < <(lsof -nP -iTCP:"$port" -sTCP:LISTEN -t 2>/dev/null || true)
}

stop_all_services() {
  stop_service_from_pid_file "server" "$SERVER_PID_FILE"
  stop_service_from_pid_file "client" "$CLIENT_PID_FILE"
  stop_service_from_port "server" "$SERVER_PORT"
  stop_service_from_port "client" "$CLIENT_PORT"
}

service_is_running() {
  local pid
  pid="$(get_pid_from_file "$1")"
  [[ -n "$pid" ]] && kill -0 "$pid" 2>/dev/null
}

show_log_tail() {
  local log_file
  log_file="$1"

  if [[ -f "$log_file" ]]; then
    warn "Last log lines from $log_file:"
    tail -n 20 "$log_file" >&2 || true
  fi
}

wait_for_http() {
  local name url pid_file log_file attempt
  name="$1"
  url="$2"
  pid_file="$3"
  log_file="$4"
  attempt=0

  while (( attempt < 30 )); do
    if curl -fsS "$url" >/dev/null 2>&1; then
      log "$name is ready at $url"
      return 0
    fi

    if ! service_is_running "$pid_file"; then
      warn "$name exited before becoming ready"
      show_log_tail "$log_file"
      return 1
    fi

    sleep 1
    attempt=$((attempt + 1))
  done

  warn "$name did not become ready at $url"
  show_log_tail "$log_file"
  return 1
}

start_service() {
  local name pid_file log_file
  name="$1"
  pid_file="$2"
  log_file="$3"
  shift 3

  : > "$log_file"
  log "Starting $name"
  nohup perl -MPOSIX=setsid -e 'setsid() or die $!; exec @ARGV' "$@" >"$log_file" 2>&1 < /dev/null &
  echo "$!" > "$pid_file"
}

main() {
  cd "$ROOT_DIR"

  if [[ "${1:-}" == "--stop" ]]; then
    STOP_ONLY=1
  elif [[ -n "${1:-}" ]]; then
    usage
    exit 1
  fi

  mkdir -p "$PIDS_DIR" "$LOGS_DIR"

  load_root_env

  SERVER_PORT="${PORT:-3001}"
  CLIENT_PORT="$(derive_client_port)"

  stop_all_services

  if (( STOP_ONLY == 1 )); then
    log "All managed services have been stopped"
    exit 0
  fi

  start_service "server" "$SERVER_PID_FILE" "$SERVER_LOG_FILE" npm run dev:server

  if ! wait_for_http "server" "http://127.0.0.1:${SERVER_PORT}/api/health" "$SERVER_PID_FILE" "$SERVER_LOG_FILE"; then
    stop_all_services
    exit 1
  fi

  start_service "client" "$CLIENT_PID_FILE" "$CLIENT_LOG_FILE" npm run dev -w client -- --port "$CLIENT_PORT" --strictPort

  if ! wait_for_http "client" "http://127.0.0.1:${CLIENT_PORT}" "$CLIENT_PID_FILE" "$CLIENT_LOG_FILE"; then
    stop_all_services
    exit 1
  fi

  log "Restart complete"
  log "Server log: $SERVER_LOG_FILE"
  log "Client log: $CLIENT_LOG_FILE"
}

main "$@"
