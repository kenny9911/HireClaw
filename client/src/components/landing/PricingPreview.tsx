import { Link } from 'react-router-dom'
import { PRICING_TIERS } from '@hireclaw/shared'

const displayTiers = PRICING_TIERS.slice(0, 4)

export const PricingPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
          Start small, scale fast. No hidden fees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTiers.map((tier) => (
            <div
              key={tier.tier}
              className={`bg-dark-300 border rounded-xl p-6 relative ${
                tier.popular
                  ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'border-dark-200/50'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-gray-100">{tier.name}</h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-100">${tier.monthlyPrice}</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Up to {tier.agentLimit === -1 ? 'unlimited' : tier.agentLimit} AI employees
              </p>

              <ul className="mt-5 space-y-2">
                {tier.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/pricing"
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View All Plans &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
