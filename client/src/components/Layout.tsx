import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Hire', path: '/hire' },
  { label: 'Settings', path: '/settings' },
]

export function Layout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  return (
    <div className="flex h-screen bg-dark-700">
      <aside className="flex w-64 flex-col border-r border-dark-200 bg-dark-600">
        <div className="flex h-16 items-center px-6">
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent"
          >
            HireClaw
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === '/dashboard' && location.pathname.startsWith('/agents'))

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-dark-300 text-white'
                    : 'text-gray-400 hover:bg-dark-400 hover:text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-dark-200 p-4">
          <p className="text-sm text-gray-300">{user?.name}</p>
          {user?.subscription && (
            <span className="mt-1 inline-block rounded-full bg-dark-300 px-2 py-0.5 text-[10px] font-medium text-gray-400">
              {user.subscription.tier}
            </span>
          )}
          <button
            onClick={logout}
            className="mt-2 block text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            Log out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto bg-dark-700 p-8">
        <Outlet />
      </main>
    </div>
  )
}
