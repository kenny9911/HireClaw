import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const typeBadgeColors: Record<string, string> = {
  EMAIL: 'bg-blue-100 text-blue-700',
  CODE: 'bg-purple-100 text-purple-700',
  SALES: 'bg-green-100 text-green-700',
  SUPPORT: 'bg-orange-100 text-orange-700',
}

export function Dashboard() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient
      .get('/agents')
      .then((res) => setAgents(res.data.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Your AI Agents</h1>
        <Button>Create Agent</Button>
      </div>

      {agents.length === 0 ? (
        <Card className="mt-8 text-center">
          <p className="text-gray-500">No agents yet. Create your first AI agent to get started.</p>
        </Card>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Link key={agent.id} to={`/agents/${agent.id}`}>
              <Card className="transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                  <div className={`h-2.5 w-2.5 rounded-full ${statusColors[agent.status]}`} />
                </div>
                <span
                  className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${typeBadgeColors[agent.type]}`}
                >
                  {AGENT_TYPE_LABELS[agent.type]}
                </span>
                <p className="mt-2 text-xs text-gray-400">
                  {agent.status.charAt(0) + agent.status.slice(1).toLowerCase()}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
