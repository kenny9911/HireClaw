import { Link } from 'react-router-dom'

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark-600 relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-600/5" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="gradient-text">Start hiring AI employees today</span>
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
          Deploy your first AI agent in under 60 seconds. No credit card required.
        </p>

        <div className="mt-10">
          <Link
            to="/register"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  )
}
