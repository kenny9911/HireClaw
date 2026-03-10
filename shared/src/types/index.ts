import {
  AgentStatus,
  AgentType,
  BillingCycle,
  Channel,
  ConversationStatus,
  LLMModel,
  SubscriptionStatus,
  SubscriptionTier,
} from '../constants'

export type User = {
  id: string
  email: string
  name: string
  role: string
  googleId?: string
  avatarUrl?: string
  subscription?: Subscription
  createdAt: string
  updatedAt: string
}

export type Agent = {
  id: string
  name: string
  type: AgentType
  status: AgentStatus
  model: LLMModel
  channel: Channel
  instructions?: string
  brandVoice?: string
  approvalGate: boolean
  taskCount: number
  config: Record<string, unknown>
  userId: string
  createdAt: string
  updatedAt: string
}

export type Message = {
  role: 'user' | 'agent'
  content: string
  timestamp: string
}

export type Conversation = {
  id: string
  agentId: string
  messages: Message[]
  status: ConversationStatus
  createdAt: string
  updatedAt: string
}

export type Subscription = {
  id: string
  userId: string
  tier: SubscriptionTier
  billingCycle: BillingCycle
  status: SubscriptionStatus
  agentLimit: number
  currentPeriodEnd: string
  createdAt: string
  updatedAt: string
}

export type ContactSubmission = {
  id: string
  name: string
  email: string
  company?: string
  message: string
  type: string
  createdAt: string
}

export type PricingTier = {
  tier: SubscriptionTier
  name: string
  monthlyPrice: number
  annualPrice: number
  agentLimit: number
  popular: boolean
  features: string[]
}

export type IndustryRole = {
  title: string
  description: string
  icon: string
}

export type IndustryConfig = {
  slug: string
  name: string
  headline: string
  description: string
  painPoints: string[]
  roles: IndustryRole[]
  roi: {
    currentCost: number
    withHireClaw: number
    savings: number
    employeeCount: number
    dailyAdminHours: number
    hourlyRate: number
  }
  complianceNotes: string[]
}

export type HireWizardState = {
  step: number
  selectedRole?: AgentType
  selectedModel?: LLMModel
  selectedChannel?: Channel
  agentName: string
  instructions: string
  brandVoice: string
  approvalGate: boolean
}

export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export type AuthTokens = {
  accessToken: string
}

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterCredentials = {
  email: string
  password: string
  name: string
}
