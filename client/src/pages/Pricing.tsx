import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRICING_TIERS } from '@hireclaw/shared'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <section className="px-4 pb-12 pt-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Choose the plan that scales with your AI workforce. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-[#2a2a3a]'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-1 text-xs font-semibold text-white">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-5">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular
            const isEnterprise = tier.tier === 'ENTERPRISE'
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice

            return (
              <div
                key={tier.tier}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  isPopular
                    ? 'border-transparent bg-gradient-to-b from-cyan-400/10 to-purple-500/10 ring-2 ring-cyan-400/50'
                    : 'border-[#2a2a3a] bg-[#111118]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>

                <div className="mt-4">
                  {isEnterprise ? (
                    <span className="text-3xl font-bold text-white">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-white">${price}</span>
                      <span className="text-gray-500">/mo</span>
                    </>
                  )}
                </div>

                <p className="mt-2 text-sm text-gray-400">
                  {isEnterprise
                    ? 'Unlimited AI Employees'
                    : `${tier.agentLimit} AI Employee${tier.agentLimit > 1 ? 's' : ''}`}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
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
                  to={isEnterprise ? '/contact' : '/register'}
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90'
                      : 'border border-[#2a2a3a] text-white hover:border-cyan-400/50 hover:bg-[#2a2a3a]'
                  }`}
                >
                  {isEnterprise ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3x Value Section */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              3x More Value
            </span>{' '}
            Than the Competition
          </h2>
          <p className="mt-4 text-gray-400">
            Most AI platforms charge per conversation or per task. HireClaw gives you full-time AI
            employees with unlimited interactions at a flat monthly rate.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { label: 'Cost per AI Employee', ours: '$16/mo', theirs: '$50+/mo' },
              { label: 'Channels Included', ours: 'All 5', theirs: '1-2' },
              { label: 'Setup Time', ours: '<60 seconds', theirs: 'Days-Weeks' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-cyan-400">{item.ours}</p>
                <p className="mt-1 text-sm text-gray-600 line-through">{item.theirs}</p>
              </div>
            ))}
          </div>
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
