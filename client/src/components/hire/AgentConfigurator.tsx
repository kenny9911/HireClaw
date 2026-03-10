export function AgentConfigurator({
  config,
  onChange,
}: {
  config: {
    name: string
    instructions: string
    brandVoice: string
    approvalGate: boolean
  }
  onChange: (config: {
    name: string
    instructions: string
    brandVoice: string
    approvalGate: boolean
  }) => void
}) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">Configure Your Agent</h2>
      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Agent Name
          </label>
          <input
            type="text"
            value={config.name}
            onChange={(e) => onChange({ ...config, name: e.target.value })}
            placeholder="e.g. Sales Bot, Code Reviewer"
            className="w-full rounded-lg border border-dark-200 bg-dark-400 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Custom Instructions
          </label>
          <textarea
            value={config.instructions}
            onChange={(e) => onChange({ ...config, instructions: e.target.value })}
            placeholder="Tell your agent how to behave..."
            rows={4}
            className="w-full rounded-lg border border-dark-200 bg-dark-400 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Brand Voice
          </label>
          <textarea
            value={config.brandVoice}
            onChange={(e) => onChange({ ...config, brandVoice: e.target.value })}
            placeholder="Describe the tone and personality..."
            rows={3}
            className="w-full rounded-lg border border-dark-200 bg-dark-400 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border border-dark-200 bg-dark-400 px-4 py-3">
          <div>
            <p className="text-sm font-medium text-gray-100">Approval Gate</p>
            <p className="text-xs text-gray-400">
              Require approval before actions
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={config.approvalGate}
            onClick={() =>
              onChange({ ...config, approvalGate: !config.approvalGate })
            }
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
              config.approvalGate
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                : 'bg-dark-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform ${
                config.approvalGate ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
