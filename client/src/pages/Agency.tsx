import { Link } from 'react-router-dom'

const revenueStreams = [
  { label: 'Platform Subscription', value: '$899/mo per client', description: 'Agency tier with white-label dashboard and multi-tenant management' },
  { label: 'Implementation Fees', value: '$10K - $20K', description: 'One-time setup, configuration, and deployment per client engagement' },
  { label: 'Monthly Retainers', value: '$2K - $10K/mo', description: 'Ongoing management, optimization, and support services' },
]

const features = [
  {
    title: 'White-Label Dashboard',
    description: 'Fully branded client portal with your logo, colors, and custom domain.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Tenant Management',
    description: 'Manage all client accounts from a single pane of glass with role-based access.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Industry Templates',
    description: 'Pre-built configurations for law, PE, accounting, healthcare, and more.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: '100 AI Employees',
    description: 'Deploy up to 100 AI agents across all client accounts with the Agency tier.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 compliance, AES-256 encryption, container isolation, and audit logs.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Revenue Share',
    description: 'Earn recurring revenue through our partner program with competitive margins.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function Agency() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="px-4 pb-16 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Build a $100K/Month AI Automation Business
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            White-label the HireClaw platform, deploy AI employees for clients, and build a
            high-margin recurring revenue stream.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90"
          >
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">Revenue Model</h2>
          <p className="mt-4 text-center text-gray-400">Three streams of revenue from every client.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {revenueStreams.map((stream) => (
              <div
                key={stream.label}
                className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6"
              >
                <p className="text-sm font-medium text-gray-500">{stream.label}</p>
                <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {stream.value}
                </p>
                <p className="mt-3 text-sm text-gray-400">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Revenue Projections</h2>
          <div className="mt-12 rounded-2xl border border-[#2a2a3a] bg-[#111118] p-12">
            <p className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              $1.5M
            </p>
            <p className="mt-4 text-xl text-gray-300">Year 1 Revenue with 20 Clients</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-white">20</p>
                <p className="text-sm text-gray-500">Active Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">$6.25K</p>
                <p className="text-sm text-gray-500">Avg Monthly/Client</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">70%+</p>
                <p className="text-sm text-gray-500">Gross Margin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">Everything You Need</h2>
          <p className="mt-4 text-center text-gray-400">
            Tools and infrastructure to run a world-class AI automation agency.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a2a3a]">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Build Your AI Agency?
          </h2>
          <p className="mt-4 text-gray-400">
            Join our partner program and start deploying AI employees for your clients today.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90"
          >
            Sign Up as Partner
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
