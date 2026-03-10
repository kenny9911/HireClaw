const badges = [
  {
    icon: '🔒',
    label: 'Container Isolation',
    description: 'Each AI employee runs in its own isolated container environment.',
  },
  {
    icon: '🔐',
    label: 'AES-256 Encryption',
    description: 'All data encrypted at rest and in transit with industry-standard AES-256.',
  },
  {
    icon: '📝',
    label: 'Full Audit Trail',
    description: 'Complete logging of every action, decision, and communication.',
  },
  {
    icon: '🛡️',
    label: 'Prompt Injection Defense',
    description: 'Multi-layer protection against prompt injection and jailbreak attempts.',
  },
  {
    icon: '💰',
    label: 'Daily Spending Limits',
    description: 'Set spending caps and usage limits to prevent runaway costs.',
  },
  {
    icon: '✅',
    label: 'SOC 2 Ready',
    description: 'Built to meet SOC 2 Type II compliance requirements from day one.',
  },
]

export const SecuritySection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4">
          Enterprise-Grade Security
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
          Your data and your customers&apos; data are protected at every layer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="bg-dark-300 border border-dark-200/50 rounded-xl p-5"
            >
              <span className="text-2xl">{badge.icon}</span>
              <h3 className="mt-3 text-sm font-semibold text-gray-100">{badge.label}</h3>
              <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
