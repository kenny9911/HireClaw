import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-700 via-dark-700 to-dark-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
          Your next hire{' '}
          <span className="gradient-text">isn&apos;t human</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
          Deploy autonomous AI employees that answer emails, write code, close deals,
          and handle support — 24/7, for a fraction of the cost.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/hire"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20"
          >
            Hire Your First AI Employee
          </Link>
          <a
            href="#features"
            className="px-8 py-3 border border-dark-200 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-gray-100 transition-all"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Setup in 60 seconds &middot; Plans from $49/mo &middot; Cancel anytime
        </p>
      </div>
    </section>
  )
}
