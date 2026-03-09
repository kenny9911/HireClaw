import { Link } from 'react-router-dom'

const features = [
  {
    icon: '📧',
    title: 'Email Agent',
    description: 'Responds to emails with context-aware, professional replies around the clock.',
  },
  {
    icon: '💻',
    title: 'Code Agent',
    description: 'Writes, reviews, and debugs code autonomously across your repositories.',
  },
  {
    icon: '📈',
    title: 'Sales Agent',
    description: 'Qualifies leads, follows up with prospects, and closes deals while you sleep.',
  },
  {
    icon: '🎧',
    title: 'Support Agent',
    description: 'Handles customer inquiries with instant, accurate resolution every time.',
  },
]

const steps = [
  { number: '1', title: 'Choose Your Agent', description: 'Pick from our library of specialized AI employees.' },
  { number: '2', title: 'Configure & Deploy', description: 'Set preferences, connect tools, and go live in seconds.' },
  { number: '3', title: 'Watch It Work', description: 'Monitor performance and results from your dashboard.' },
]

export function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hire AI Employees That Work 24/7
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Deploy intelligent AI agents that answer emails, write code, close deals, and handle
            support — in 60 seconds, no coding needed.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-lg transition-transform hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">Meet Your AI Team</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          © 2026 HireClaw. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
