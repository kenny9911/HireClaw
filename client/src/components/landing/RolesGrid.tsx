import { AgentType, AGENT_TYPE_LABELS, AGENT_ROLE_DETAILS } from '@hireclaw/shared'

const agentTypes = Object.values(AgentType)

export const RolesGrid = () => {
  return (
    <section id="roles" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4">
          Meet Your AI Team
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          12 specialized roles ready to join your workforce today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {agentTypes.map((type) => {
            const details = AGENT_ROLE_DETAILS[type]
            const label = AGENT_TYPE_LABELS[type]

            return (
              <div
                key={type}
                className="group bg-dark-300 border border-dark-200/50 rounded-xl p-5 hover:border-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-3xl">{details.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-gray-100">{label}</h3>
                <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">{details.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {details.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-dark-500 border border-dark-200/50 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
