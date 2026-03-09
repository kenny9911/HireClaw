import { AgentStatus, AgentType, ConversationStatus } from '../constants'

export type User = {
  id: string
  email: string
  name: string
  role: string
  createdAt: string
  updatedAt: string
}

export type Agent = {
  id: string
  name: string
  type: AgentType
  status: AgentStatus
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
