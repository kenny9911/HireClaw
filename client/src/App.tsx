import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { AgentDetail } from './pages/AgentDetail'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Layout } from './components/Layout'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents/:id" element={<AgentDetail />} />
        </Route>
      </Route>
    </Routes>
  )
}
