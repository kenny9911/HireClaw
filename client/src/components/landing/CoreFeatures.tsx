const features = [
  {
    icon: '⚡',
    title: 'Ready in 60 Seconds',
    description: 'One-click deployment gets your AI employee working instantly. No complex setup or training required.',
  },
  {
    icon: '🧠',
    title: 'Multi-Model AI',
    description: 'Choose from GPT-4o, Claude, Gemini, DeepSeek, or Llama — pick the best model for the job.',
  },
  {
    icon: '📡',
    title: 'Every Channel',
    description: 'Slack, Discord, Telegram, WhatsApp, Email — your AI works wherever your team communicates.',
  },
  {
    icon: '🔄',
    title: 'Always On',
    description: '24/7 autonomous operation means your AI employee never sleeps, never takes a break, never misses a beat.',
  },
  {
    icon: '🎯',
    title: 'Your Brand Voice',
    description: 'Customizable personality and tone ensures every response sounds authentically like your company.',
  },
  {
    icon: '🛡️',
    title: 'Approval Gates',
    description: 'Human-in-the-loop controls when you need them. Review and approve sensitive actions before they execute.',
  },
]

export const CoreFeatures = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4">
          Built for the Modern Workplace
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Everything you need to hire, manage, and scale AI employees across your organization.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-300 border border-dark-200/50 rounded-xl p-6 hover:border-dark-200 transition-colors"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-100">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
