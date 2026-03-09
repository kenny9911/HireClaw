export enum AgentType {
  EMAIL = 'EMAIL',
  CODE = 'CODE',
  SALES = 'SALES',
  SUPPORT = 'SUPPORT',
}

export enum AgentStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  OFFLINE = 'OFFLINE',
}

export enum ConversationStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  ARCHIVED = 'ARCHIVED',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const AGENT_TYPE_LABELS: Record<AgentType, string> = {
  [AgentType.EMAIL]: 'Email Agent',
  [AgentType.CODE]: 'Code Agent',
  [AgentType.SALES]: 'Sales Agent',
  [AgentType.SUPPORT]: 'Support Agent',
}

export const API_ROUTES = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    ME: '/auth/me',
  },
  AGENTS: {
    BASE: '/agents',
    BY_ID: (id: string) => `/agents/${id}`,
  },
  CONVERSATIONS: {
    BASE: '/conversations',
    BY_ID: (id: string) => `/conversations/${id}`,
    MESSAGES: (id: string) => `/conversations/${id}/messages`,
  },
} as const
