import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Layout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const navItems = [
    { label: 'Dashboard', path: '/dashboard' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center px-6">
          <Link to="/dashboard" className="text-xl font-bold text-primary-600">
            HireClaw
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-200 p-4">
          <div className="mb-2 text-sm text-gray-600">{user?.name}</div>
          <button
            onClick={logout}
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            Log out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}
