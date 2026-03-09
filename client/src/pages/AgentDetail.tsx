import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { apiClient } from '../api/client'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { AGENT_TYPE_LABELS } from '@hireclaw/shared'
import type { Agent } from '@hireclaw/shared'

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-500',
  PAUSED: 'bg-yellow-500',
  OFFLINE: 'bg-gray-400',
}

export function AgentDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [agent, setAgent] = useState<Agent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient
      .get(`/agents/${id}`)
      .then((res) => setAgent(res.data.data))
      .catch(() => setAgent(null))
      .finally(() => setLoading(false))
  }, [id])

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this agent?')) return
    await apiClient.delete(`/agents/${id}`)
    navigate('/dashboard')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-900">Agent not found</h2>
        <Link to="/dashboard" className="mt-4 text-primary-600 hover:text-primary-700">
          Back to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/dashboard" className="text-sm text-primary-600 hover:text-primary-700">
        ← Back to Dashboard
      </Link>

      <Card className="mt-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{agent.name}</h1>
            <span className="mt-1 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
              {AGENT_TYPE_LABELS[agent.type]}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${statusColors[agent.status]}`} />
            <span className="text-sm text-gray-600">
              {agent.status.charAt(0) + agent.status.slice(1).toLowerCase()}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500">Configuration</h3>
          <pre className="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
            {JSON.stringify(agent.config, null, 2)}
          </pre>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="danger" onClick={handleDelete}>
            Delete Agent
          </Button>
        </div>
      </Card>
    </div>
  )
}
