import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiClient } from '../api/client'
import { WizardProgress } from '../components/hire/WizardProgress'
import { RoleSelector } from '../components/hire/RoleSelector'
import { ModelSelector } from '../components/hire/ModelSelector'
import { ChannelSelector } from '../components/hire/ChannelSelector'
import { AgentConfigurator } from '../components/hire/AgentConfigurator'
import { DeployReview } from '../components/hire/DeployReview'
import type { HireWizardState } from '@hireclaw/shared'

const STEPS = ['Choose Role', 'Pick Model', 'Connect Channel', 'Configure', 'Deploy']

export function HireWizard() {
  const navigate = useNavigate()
  const [deploying, setDeploying] = useState(false)
  const [state, setState] = useState<HireWizardState>({
    step: 1,
    agentName: '',
    instructions: '',
    brandVoice: '',
    approvalGate: false,
  })

  const canProceed = () => {
    switch (state.step) {
      case 1:
        return !!state.selectedRole
      case 2:
        return !!state.selectedModel
      case 3:
        return !!state.selectedChannel
      case 4:
        return !!state.agentName.trim()
      default:
        return true
    }
  }

  const handleDeploy = async () => {
    setDeploying(true)
    try {
      await apiClient.post('/agents', {
        name: state.agentName,
        type: state.selectedRole,
        model: state.selectedModel,
        channel: state.selectedChannel,
        instructions: state.instructions,
        brandVoice: state.brandVoice,
        approvalGate: state.approvalGate,
      })
      navigate('/dashboard')
    } catch (err) {
      console.error(err)
      setDeploying(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10">
        <WizardProgress steps={STEPS} currentStep={state.step} />
      </div>

      <div className="mb-10">
        {state.step === 1 && (
          <RoleSelector
            selectedRole={state.selectedRole}
            onSelect={(role) => setState((s) => ({ ...s, selectedRole: role }))}
          />
        )}
        {state.step === 2 && (
          <ModelSelector
            selectedModel={state.selectedModel}
            onSelect={(model) => setState((s) => ({ ...s, selectedModel: model }))}
          />
        )}
        {state.step === 3 && (
          <ChannelSelector
            selectedChannel={state.selectedChannel}
            onSelect={(channel) => setState((s) => ({ ...s, selectedChannel: channel }))}
          />
        )}
        {state.step === 4 && (
          <AgentConfigurator
            config={{
              name: state.agentName,
              instructions: state.instructions,
              brandVoice: state.brandVoice,
              approvalGate: state.approvalGate,
            }}
            onChange={(cfg) =>
              setState((s) => ({
                ...s,
                agentName: cfg.name,
                instructions: cfg.instructions,
                brandVoice: cfg.brandVoice,
                approvalGate: cfg.approvalGate,
              }))
            }
          />
        )}
        {state.step === 5 && (
          <DeployReview state={state} onDeploy={handleDeploy} loading={deploying} />
        )}
      </div>

      {state.step < 5 && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setState((s) => ({ ...s, step: s.step - 1 }))}
            disabled={state.step === 1}
            className="rounded-lg border border-dark-200 bg-dark-500 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-dark-400 disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setState((s) => ({ ...s, step: s.step + 1 }))}
            disabled={!canProceed()}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
