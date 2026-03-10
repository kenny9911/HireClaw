import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiClient } from '../api/client'
import { useAuth } from '../hooks/useAuth'
import {
  AgentStatus,
  AGENT_TYPE_LABELS,
  AGENT_ROLE_DETAILS,
  LLM_MODEL_LABELS,
  CHANNEL_LABELS,
} from '@hireclaw/shared'
import type { Agent } from '@hireclaw/shared'

const statusDot: Record<string, string> = {
  [AgentStatus.ACTIVE]: 'bg-green-500',
  [AgentStatus.PAUSED]: 'bg-yellow-500',
  [AgentStatus.OFFLINE]: 'bg-gray-500',
}

const statusLabel: Record<string, string> = {
  [AgentStatus.ACTIVE]: 'Active',
  [AgentStatus.PAUSED]: 'Paused',
  [AgentStatus.OFFLINE]: 'Offline',
}

export function Dashboard() {
  const { user } = useAuth()
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient
      .get('/agents')
      .then((res) => setAgents(res.data.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const activeCount = agents.filter((a) => a.status === AgentStatus.ACTIVE).length
  const totalTasks = agents.reduce((sum, a) => sum + (a.taskCount ?? 0), 0)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="h-8 w-8 animate-spin text-cyan-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <Link
          to="/hire"
          className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Hire New Agent
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: 'Total Agents', value: agents.length },
          { label: 'Active Agents', value: activeCount },
          { label: 'Total Tasks', value: totalTasks },
          { label: 'Subscription', value: user?.subscription?.tier ?? 'None' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-dark-200 bg-dark-300 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              {stat.label}
            </p>
            <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Agents */}
      {agents.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dark-200 bg-dark-300 py-16">
          <div className="mb-4 text-5xl opacity-40">🤖</div>
          <p className="mb-2 text-lg font-semibold text-white">No agents yet</p>
          <p className="mb-6 text-sm text-gray-400">
            Hire your first AI employee to get started.
          </p>
          <Link
            to="/hire"
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Hire Your First Agent
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/hire"
            className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-dark-200 bg-dark-500/50 p-8 text-center transition-colors hover:border-cyan-500/50 hover:bg-dark-400/50"
          >
            <span className="mb-2 text-3xl">+</span>
            <span className="text-sm font-medium text-gray-400">Hire New Agent</span>
          </Link>

          {agents.map((agent) => (
            <Link
              key={agent.id}
              to={`/agents/${agent.id}`}
              className="rounded-xl border border-dark-200 bg-dark-300 p-5 transition-colors hover:border-dark-100 hover:bg-dark-200/50"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-white">{agent.name}</h3>
                <div className="flex items-center gap-1.5">
                  <div className={`h-2 w-2 rounded-full ${statusDot[agent.status]}`} />
                  <span className="text-xs text-gray-400">{statusLabel[agent.status]}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-dark-500 px-2.5 py-0.5 text-xs text-gray-300">
                  {AGENT_ROLE_DETAILS[agent.type].icon} {AGENT_TYPE_LABELS[agent.type]}
                </span>
                <span className="rounded-full bg-dark-500 px-2.5 py-0.5 text-xs text-gray-300">
                  {LLM_MODEL_LABELS[agent.model].name}
                </span>
                <span className="rounded-full bg-dark-500 px-2.5 py-0.5 text-xs text-gray-300">
                  {CHANNEL_LABELS[agent.channel].icon} {CHANNEL_LABELS[agent.channel].name}
                </span>
              </div>

              <p className="mt-3 text-xs text-gray-400">
                {agent.taskCount ?? 0} tasks completed
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
