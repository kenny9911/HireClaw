import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { apiClient } from '../api/client'
import {
  AgentStatus,
  AGENT_TYPE_LABELS,
  AGENT_ROLE_DETAILS,
  LLM_MODEL_LABELS,
  CHANNEL_LABELS,
} from '@hireclaw/shared'
import type { Agent } from '@hireclaw/shared'

const statusDot: Record<string, string> = {
  [AgentStatus.ACTIVE]: 'bg-green-500',
  [AgentStatus.PAUSED]: 'bg-yellow-500',
  [AgentStatus.OFFLINE]: 'bg-gray-500',
}

const statusLabel: Record<string, string> = {
  [AgentStatus.ACTIVE]: 'Active',
  [AgentStatus.PAUSED]: 'Paused',
  [AgentStatus.OFFLINE]: 'Offline',
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
    if (!window.confirm('Are you sure you want to delete this agent? This action cannot be undone.')) return
    await apiClient.delete(`/agents/${id}`)
    navigate('/dashboard')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="h-8 w-8 animate-spin text-cyan-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="mb-2 text-xl font-semibold text-white">Agent not found</p>
        <Link to="/dashboard" className="text-sm text-cyan-400 hover:text-cyan-300">
          Back to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
      >
        &larr; Back to Dashboard
      </Link>

      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{agent.name}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-dark-500 px-3 py-1 text-xs font-medium text-gray-300">
              {AGENT_ROLE_DETAILS[agent.type].icon} {AGENT_TYPE_LABELS[agent.type]}
            </span>
            <span className="rounded-full bg-dark-500 px-3 py-1 text-xs font-medium text-gray-300">
              {LLM_MODEL_LABELS[agent.model].name}
            </span>
            <span className="rounded-full bg-dark-500 px-3 py-1 text-xs font-medium text-gray-300">
              {CHANNEL_LABELS[agent.channel].icon} {CHANNEL_LABELS[agent.channel].name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${statusDot[agent.status]}`} />
          <span className="text-sm text-gray-300">{statusLabel[agent.status]}</span>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-6 rounded-xl border border-dark-200 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400">Tasks Completed</p>
            <p className="text-lg font-semibold text-white">{agent.taskCount ?? 0}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Created</p>
            <p className="text-sm text-gray-100">
              {new Date(agent.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {agent.instructions && (
          <div className="mt-4">
            <p className="text-xs text-gray-400">Instructions</p>
            <p className="mt-1 text-sm text-gray-100">{agent.instructions}</p>
          </div>
        )}

        {agent.brandVoice && (
          <div className="mt-4">
            <p className="text-xs text-gray-400">Brand Voice</p>
            <p className="mt-1 text-sm text-gray-100">{agent.brandVoice}</p>
          </div>
        )}

        <div className="mt-4">
          <p className="text-xs text-gray-400">Approval Gate</p>
          <p className="mt-1 text-sm text-gray-100">
            {agent.approvalGate ? 'Enabled' : 'Disabled'}
          </p>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-6 rounded-xl border border-dark-200 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Configuration</h2>
        <pre className="overflow-auto rounded-lg bg-dark-500 p-4 text-xs text-gray-300">
          {JSON.stringify(agent.config, null, 2)}
        </pre>
      </section>

      {/* Danger Zone */}
      <section className="rounded-xl border border-red-500/30 bg-dark-300 p-6">
        <h2 className="mb-4 text-lg font-semibold text-red-400">Danger Zone</h2>
        <p className="mb-4 text-sm text-gray-400">
          Deleting this agent is permanent and cannot be undone.
        </p>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-lg border border-red-500/50 bg-red-500/20 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/30"
        >
          Delete Agent
        </button>
      </section>
    </div>
  )
}
