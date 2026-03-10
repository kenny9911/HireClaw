import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { apiClient } from '../api/client'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await apiClient.post('/auth/forgot-password', { email })
      setSent(true)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-700 px-4">
      <div className="w-full max-w-md rounded-xl border border-dark-200 bg-dark-500 p-8">
        {sent ? (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20">
              <svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-center text-2xl font-bold text-white">Check your email</h1>
            <p className="mt-2 text-center text-sm text-gray-400">
              If an account exists for <span className="text-gray-200">{email}</span>, we&apos;ve sent a password reset link. Check your inbox and spam folder.
            </p>
            <p className="mt-6 text-center text-sm text-gray-500">
              Didn&apos;t receive it?{' '}
              <button
                type="button"
                onClick={() => setSent(false)}
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                Try again
              </button>
            </p>
            <Link
              to="/login"
              className="mt-4 block text-center text-sm font-medium text-gray-400 hover:text-gray-300"
            >
              Back to sign in
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-white">Forgot your password?</h1>
            <p className="mt-1 text-sm text-gray-400">
              Enter your email and we&apos;ll send you a link to reset it.
            </p>

            {error && (
              <div className="mt-4 rounded-lg border border-red-500/50 bg-red-500/20 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-300">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-dark-200 bg-dark-400 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
