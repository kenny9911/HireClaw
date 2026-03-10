import {
  AgentType,
  AGENT_TYPE_LABELS,
  AGENT_ROLE_DETAILS,
} from '@hireclaw/shared'

export function RoleSelector({
  selectedRole,
  onSelect,
}: {
  selectedRole: AgentType | undefined
  onSelect: (role: AgentType) => void
}) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">Choose a Role</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.values(AgentType).map((role) => {
          const details = AGENT_ROLE_DETAILS[role]
          const label = AGENT_TYPE_LABELS[role]
          const isSelected = selectedRole === role

          return (
            <button
              key={role}
              type="button"
              onClick={() => onSelect(role)}
              className={`flex flex-col items-start rounded-xl border p-5 text-left transition-all ${
                isSelected
                  ? 'border-transparent bg-dark-500 shadow-[0_0_16px_rgba(6,182,212,0.2)] ring-2 ring-cyan-500'
                  : 'border-dark-200 bg-dark-500 hover:border-dark-100 hover:bg-dark-400'
              }`}
            >
              <span className="text-2xl">{details.icon}</span>
              <h3 className="mt-3 text-sm font-semibold text-white">{label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                {details.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {details.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-dark-300 px-2 py-0.5 text-[10px] font-medium text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
