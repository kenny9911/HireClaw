import { useAuth } from '../hooks/useAuth'
import { apiClient } from '../api/client'
import { useNavigate } from 'react-router-dom'

export function Settings() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) return
    try {
      await apiClient.delete('/auth/me')
      logout()
      navigate('/login')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 text-2xl font-bold text-white">Settings</h1>

      {/* Profile */}
      <section className="mb-6 rounded-xl border border-dark-200 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Profile</h2>
        <div className="space-y-3">
          <div>
            <span className="text-sm text-gray-400">Name</span>
            <p className="text-sm text-gray-100">{user?.name || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-gray-400">Email</span>
            <p className="text-sm text-gray-100">{user?.email || '—'}</p>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="mb-6 rounded-xl border border-dark-200 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Subscription</h2>
        <p className="text-sm text-gray-100">
          {user?.subscription
            ? `Current plan: ${user.subscription.tier}`
            : 'No subscription'}
        </p>
        <button
          type="button"
          onClick={() => navigate('/pricing')}
          className="mt-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Upgrade
        </button>
      </section>

      {/* Security */}
      <section className="mb-6 rounded-xl border border-dark-200 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Security</h2>
        <p className="text-sm text-gray-400">Password management coming soon</p>
      </section>

      {/* Danger Zone */}
      <section className="rounded-xl border border-red-500/30 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-red-400">Danger Zone</h2>
        <p className="mb-4 text-sm text-gray-400">
          Once you delete your account, there is no going back.
        </p>
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="rounded-lg border border-red-500/50 bg-red-500/20 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/30"
        >
          Delete Account
        </button>
      </section>
    </div>
  )
}
