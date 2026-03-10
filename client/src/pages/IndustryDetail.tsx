import { useParams, Link } from 'react-router-dom'
import { industries } from '../data/industries'

export function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">404</h1>
          <p className="mt-4 text-gray-400">Industry not found.</p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-lg border border-[#2a2a3a] px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400/50 hover:bg-[#2a2a3a]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="px-4 pb-16 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
            {industry.name}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {industry.headline}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white">The Problem</h2>
          <p className="mt-4 text-center text-gray-400">
            Manual processes draining your team every day.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {industry.painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-[#2a2a3a] bg-[#111118] p-5"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-sm text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Roles */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Your AI {industry.name} Team
          </h2>
          <p className="mt-4 text-center text-gray-400">
            Purpose-built AI employees for {industry.name.toLowerCase()}.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {industry.roles.map((role) => (
              <div
                key={role.title}
                className="rounded-xl border border-[#2a2a3a] bg-[#111118] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{role.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-400">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">The Math Speaks for Itself</h2>
          <p className="mt-4 text-center text-gray-400">
            Replace {industry.roi.employeeCount} admin roles and save {industry.roi.dailyAdminHours} hours per day.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-8 text-center">
              <p className="text-sm text-gray-500">Current Annual Cost</p>
              <p className="mt-3 text-3xl font-bold text-red-400">
                {formatCurrency(industry.roi.currentCost)}
              </p>
              <p className="mt-2 text-xs text-gray-600">
                {industry.roi.employeeCount} employees &times; ${industry.roi.hourlyRate}/hr
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-400/10 to-purple-500/10 p-8 text-center ring-2 ring-cyan-400/20">
              <p className="text-sm text-gray-500">With HireClaw</p>
              <p className="mt-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {formatCurrency(industry.roi.withHireClaw)}
              </p>
              <p className="mt-2 text-xs text-gray-600">AI workforce annual cost</p>
            </div>
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-8 text-center">
              <p className="text-sm text-gray-500">Annual Savings</p>
              <p className="mt-3 text-3xl font-bold text-emerald-400">
                {formatCurrency(industry.roi.savings)}
              </p>
              <p className="mt-2 text-xs text-gray-600">
                {Math.round((industry.roi.savings / industry.roi.currentCost) * 100)}% cost reduction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-white">Security & Compliance</h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industry.complianceNotes.map((note) => (
              <span
                key={note}
                className="flex items-center gap-2 rounded-full border border-[#2a2a3a] bg-[#111118] px-4 py-2 text-sm text-gray-300"
              >
                <svg
                  className="h-4 w-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2a2a3a] px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Deploy Your {industry.name} AI Team?
          </h2>
          <p className="mt-4 text-gray-400">
            Start saving {formatCurrency(industry.roi.savings)} per year in under 60 seconds.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:opacity-90"
          >
            Start Deploying
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
