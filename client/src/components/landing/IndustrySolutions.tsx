import { Link } from 'react-router-dom'
import { Industry, INDUSTRY_LABELS } from '@hireclaw/shared'

const industries = [
  {
    industry: Industry.LAW,
    slug: 'law-firms',
    savings: '$191K',
    description: 'Automate document review, client intake, billing, and compliance tracking with AI paralegals and legal assistants.',
  },
  {
    industry: Industry.PRIVATE_EQUITY,
    slug: 'private-equity',
    savings: '$193K',
    description: 'Accelerate deal sourcing, due diligence, portfolio monitoring, and investor reporting with AI analysts.',
  },
  {
    industry: Industry.ACCOUNTING,
    slug: 'accounting',
    savings: '$127K',
    description: 'Streamline bookkeeping, tax prep, audit support, and client communications with AI accountants.',
  },
  {
    industry: Industry.HEALTHCARE,
    slug: 'healthcare',
    savings: '$109K',
    description: 'Reduce admin burden with AI handling scheduling, billing, patient follow-ups, and records management.',
  },
]

export const IndustrySolutions = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4">
          Built for Your Industry
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Purpose-built AI configurations for the industries that need them most.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((item) => (
            <div
              key={item.industry}
              className="bg-dark-300 border border-dark-200/50 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-100">
                  {INDUSTRY_LABELS[item.industry]}
                </h3>
                <span className="text-lg font-bold gradient-text">{item.savings}/yr</span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>

              <Link
                to={`/industries/${item.slug}`}
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
