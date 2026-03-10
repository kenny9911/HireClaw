import { Link } from 'react-router-dom'

const stats = [
  { value: '$178K', label: 'Avg Annual Savings' },
  { value: '87%', label: 'Admin Reduction' },
  { value: '<60s', label: 'Deploy Time' },
  { value: '24/7', label: 'Operation' },
]

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We map your workflows, identify bottlenecks, and calculate your current cost of manual processes.',
  },
  {
    number: '02',
    title: 'Present the Math',
    description:
      'You get a detailed ROI breakdown showing exactly how much you save with AI employees vs. traditional hires.',
  },
  {
    number: '03',
    title: 'Deploy & Configure',
    description:
      'We deploy your AI workforce, connect channels, configure compliance settings, and go live in days.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description:
      'Continuous monitoring, performance tuning, and scaling as your AI team takes on more responsibility.',
  },
]

const packages = [
  {
    name: 'Starter',
    price: '$5K - $10K',
    timeline: '1-2 weeks',
    popular: false,
    features: [
      '2-3 AI employee deployments',
      'Channel integration setup',
      'Workflow configuration',
      'Team training session',
      '30-day optimization support',
    ],
  },
  {
    name: 'Business Transform',
    price: '$10K - $20K',
    timeline: '2-4 weeks',
    popular: true,
    features: [
      '5-10 AI employee deployments',
      'Industry-specific customization',
      'Multi-channel integration',
      'Custom workflow automation',
      'Staff training program',
      '60-day optimization support',
    ],
  },
  {
    name: 'Enterprise',
    price: '$20K+',
    timeline: '4-8 weeks',
    popular: false,
    features: [
      'Unlimited AI deployments',
      'Full compliance review',
      'Dedicated solutions engineer',
      'Custom integrations',
      'Executive reporting dashboards',
      '99.9% SLA guarantee',
    ],
  },
]

const retainers = [
  { name: 'Growth', price: '$2K', description: 'Monthly monitoring, optimization, and 5 support hours' },
  { name: 'Scale', price: '$5K', description: 'Dedicated account manager, 15 support hours, quarterly reviews' },
  { name: 'Enterprise', price: '$10K', description: 'Dedicated engineer, unlimited support, custom development' },
]

export function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="px-4 pb-16 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Implementation & Managed AI Workforce
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            From discovery to deployment to ongoing optimization. We handle everything so your team
            can focus on what matters.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6 text-center"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">
            4-Step Implementation Framework
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6"
              >
                <span className="text-sm font-bold text-cyan-400">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">Service Packages</h2>
          <p className="mt-4 text-center text-gray-400">
            One-time implementation engagements tailored to your needs.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  pkg.popular
                    ? 'border-transparent bg-gradient-to-b from-cyan-400/10 to-purple-500/10 ring-2 ring-cyan-400/50'
                    : 'border-[#2a2a3a] bg-[#111118]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {pkg.price}
                </p>
                <p className="mt-1 text-sm text-gray-500">{pkg.timeline}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90'
                      : 'border border-[#2a2a3a] text-white hover:border-cyan-400/50 hover:bg-[#2a2a3a]'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Retainers */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">Monthly Retainers</h2>
          <p className="mt-4 text-center text-gray-400">
            Ongoing management and optimization for your AI workforce.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {retainers.map((retainer) => (
              <div
                key={retainer.name}
                className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{retainer.name}</h3>
                <p className="mt-2 text-2xl font-bold text-cyan-400">{retainer.price}<span className="text-sm text-gray-500">/mo</span></p>
                <p className="mt-3 text-sm text-gray-400">{retainer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Workforce?</h2>
          <p className="mt-4 text-gray-400">
            Book a free discovery call and get a custom ROI analysis for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90"
          >
            Book Discovery Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a3a] px-4 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-600">
          &copy; 2026 HireClaw. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
