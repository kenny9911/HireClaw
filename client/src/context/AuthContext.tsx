import { createContext, useState, useEffect, ReactNode } from 'react'
import { apiClient } from '../api/client'
import type { User } from '@hireclaw/shared'

export interface AuthContextType {
  user: User | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('hireclaw_token'),
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      apiClient
        .get('/auth/me')
        .then((res) => setUser(res.data.data))
        .catch(() => {
          localStorage.removeItem('hireclaw_token')
          setToken(null)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [token])

  const login = async (email: string, password: string) => {
    const res = await apiClient.post('/auth/login', { email, password })
    const { user: userData, token: newToken } = res.data.data
    localStorage.setItem('hireclaw_token', newToken)
    setToken(newToken)
    setUser(userData)
  }

  const register = async (email: string, password: string, name: string) => {
    const res = await apiClient.post('/auth/register', { email, password, name })
    const { user: userData, token: newToken } = res.data.data
    localStorage.setItem('hireclaw_token', newToken)
    setToken(newToken)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('hireclaw_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
