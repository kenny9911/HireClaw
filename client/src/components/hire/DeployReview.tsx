import {
  AGENT_TYPE_LABELS,
  AGENT_ROLE_DETAILS,
  LLM_MODEL_LABELS,
  CHANNEL_LABELS,
} from '@hireclaw/shared'
import type { HireWizardState } from '@hireclaw/shared'

export function DeployReview({
  state,
  onDeploy,
  loading,
}: {
  state: HireWizardState
  onDeploy: () => void
  loading: boolean
}) {
  const role = state.selectedRole
  const model = state.selectedModel
  const channel = state.selectedChannel

  const items = [
    {
      label: 'Role',
      value: role
        ? `${AGENT_ROLE_DETAILS[role].icon} ${AGENT_TYPE_LABELS[role]}`
        : '—',
    },
    {
      label: 'Model',
      value: model ? LLM_MODEL_LABELS[model].name : '—',
    },
    {
      label: 'Channel',
      value: channel
        ? `${CHANNEL_LABELS[channel].icon} ${CHANNEL_LABELS[channel].name}`
        : '—',
    },
    { label: 'Agent Name', value: state.agentName || '—' },
    {
      label: 'Instructions',
      value: state.instructions
        ? state.instructions.length > 120
          ? state.instructions.slice(0, 120) + '...'
          : state.instructions
        : '—',
    },
    {
      label: 'Brand Voice',
      value: state.brandVoice
        ? state.brandVoice.length > 120
          ? state.brandVoice.slice(0, 120) + '...'
          : state.brandVoice
        : '—',
    },
    {
      label: 'Approval Gate',
      value: state.approvalGate ? 'Enabled' : 'Disabled',
    },
  ]

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">Review & Deploy</h2>
      <div className="rounded-xl border border-dark-200 bg-dark-500 p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-start justify-between gap-4">
              <span className="shrink-0 text-sm text-gray-400">{item.label}</span>
              <span className="text-right text-sm text-gray-100">{item.value}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onDeploy}
          disabled={loading}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Deploying...
            </>
          ) : (
            'Deploy Agent'
          )}
        </button>
      </div>
    </div>
  )
}
