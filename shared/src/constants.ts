export enum AgentType {
  SOFTWARE_ENGINEER = 'SOFTWARE_ENGINEER',
  CTO = 'CTO',
  SALES_DEV_REP = 'SALES_DEV_REP',
  SUPPORT_AGENT = 'SUPPORT_AGENT',
  RESEARCH_ANALYST = 'RESEARCH_ANALYST',
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  CONTENT_WRITER = 'CONTENT_WRITER',
  DEVOPS_ENGINEER = 'DEVOPS_ENGINEER',
  HR_MANAGER = 'HR_MANAGER',
  BOOKKEEPER = 'BOOKKEEPER',
  DESIGN_LEAD = 'DESIGN_LEAD',
  GROWTH_MARKETER = 'GROWTH_MARKETER',
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

export enum LLMModel {
  GPT_4O = 'GPT_4O',
  CLAUDE = 'CLAUDE',
  GEMINI = 'GEMINI',
  DEEPSEEK = 'DEEPSEEK',
  LLAMA = 'LLAMA',
}

export enum Channel {
  SLACK = 'SLACK',
  DISCORD = 'DISCORD',
  TELEGRAM = 'TELEGRAM',
  WHATSAPP = 'WHATSAPP',
  EMAIL = 'EMAIL',
}

export enum SubscriptionTier {
  PRO = 'PRO',
  TEAM = 'TEAM',
  BUSINESS = 'BUSINESS',
  AGENCY = 'AGENCY',
  ENTERPRISE = 'ENTERPRISE',
}

export enum BillingCycle {
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL',
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  PAST_DUE = 'PAST_DUE',
  TRIALING = 'TRIALING',
}

export enum Industry {
  LAW = 'LAW',
  PRIVATE_EQUITY = 'PRIVATE_EQUITY',
  ACCOUNTING = 'ACCOUNTING',
  HEALTHCARE = 'HEALTHCARE',
}

export const AGENT_TYPE_LABELS: Record<AgentType, string> = {
  [AgentType.SOFTWARE_ENGINEER]: 'Software Engineer',
  [AgentType.CTO]: 'CTO',
  [AgentType.SALES_DEV_REP]: 'Sales Dev Rep',
  [AgentType.SUPPORT_AGENT]: 'Support Agent',
  [AgentType.RESEARCH_ANALYST]: 'Research Analyst',
  [AgentType.PROJECT_MANAGER]: 'Project Manager',
  [AgentType.CONTENT_WRITER]: 'Content Writer',
  [AgentType.DEVOPS_ENGINEER]: 'DevOps Engineer',
  [AgentType.HR_MANAGER]: 'HR Manager',
  [AgentType.BOOKKEEPER]: 'Bookkeeper',
  [AgentType.DESIGN_LEAD]: 'Design Lead',
  [AgentType.GROWTH_MARKETER]: 'Growth Marketer',
}

export const AGENT_ROLE_DETAILS: Record<AgentType, { description: string, icon: string, skills: string[] }> = {
  [AgentType.SOFTWARE_ENGINEER]: {
    description: 'Writes, reviews, and debugs code autonomously across your repositories.',
    icon: '💻',
    skills: ['Code Review', 'TDD', 'Debugging', 'Architecture'],
  },
  [AgentType.CTO]: {
    description: 'Provides technical leadership, architecture decisions, and team coordination.',
    icon: '🏗️',
    skills: ['Architecture', 'Tech Strategy', 'Code Review', 'Team Lead'],
  },
  [AgentType.SALES_DEV_REP]: {
    description: 'Qualifies leads, follows up with prospects, and closes deals while you sleep.',
    icon: '📈',
    skills: ['Lead Qualification', 'Outreach', 'Pipeline', 'Closing'],
  },
  [AgentType.SUPPORT_AGENT]: {
    description: 'Handles customer inquiries with instant, accurate resolution every time.',
    icon: '🎧',
    skills: ['Ticket Resolution', 'Knowledge Base', 'Escalation', 'CSAT'],
  },
  [AgentType.RESEARCH_ANALYST]: {
    description: 'Conducts deep research, synthesizes findings, and generates comprehensive reports.',
    icon: '🔬',
    skills: ['Data Analysis', 'Report Writing', 'Market Research', 'Insights'],
  },
  [AgentType.PROJECT_MANAGER]: {
    description: 'Tracks deadlines, coordinates teams, and keeps projects on schedule.',
    icon: '📋',
    skills: ['Sprint Planning', 'Status Reports', 'Resource Allocation', 'Risk Management'],
  },
  [AgentType.CONTENT_WRITER]: {
    description: 'Creates engaging content for blogs, social media, and marketing campaigns.',
    icon: '✍️',
    skills: ['Blog Posts', 'Social Media', 'SEO', 'Copywriting'],
  },
  [AgentType.DEVOPS_ENGINEER]: {
    description: 'Manages infrastructure, CI/CD pipelines, and deployment automation.',
    icon: '⚙️',
    skills: ['CI/CD', 'Infrastructure', 'Monitoring', 'Security'],
  },
  [AgentType.HR_MANAGER]: {
    description: 'Handles recruiting, onboarding, and employee communications.',
    icon: '👥',
    skills: ['Recruiting', 'Onboarding', 'Policy', 'Employee Relations'],
  },
  [AgentType.BOOKKEEPER]: {
    description: 'Manages financial records, invoicing, and expense tracking.',
    icon: '📊',
    skills: ['Bookkeeping', 'Invoicing', 'Reconciliation', 'Reporting'],
  },
  [AgentType.DESIGN_LEAD]: {
    description: 'Creates UI/UX designs, brand assets, and visual content.',
    icon: '🎨',
    skills: ['UI/UX', 'Branding', 'Prototyping', 'Design Systems'],
  },
  [AgentType.GROWTH_MARKETER]: {
    description: 'Drives growth through analytics, campaigns, and conversion optimization.',
    icon: '🚀',
    skills: ['Analytics', 'A/B Testing', 'Campaigns', 'SEO/SEM'],
  },
}

export const LLM_MODEL_LABELS: Record<LLMModel, { name: string, description: string }> = {
  [LLMModel.GPT_4O]: { name: 'GPT-4o', description: 'OpenAI\'s most capable model' },
  [LLMModel.CLAUDE]: { name: 'Claude', description: 'Anthropic\'s thoughtful AI' },
  [LLMModel.GEMINI]: { name: 'Gemini', description: 'Google\'s multimodal model' },
  [LLMModel.DEEPSEEK]: { name: 'DeepSeek', description: 'Open-source reasoning model' },
  [LLMModel.LLAMA]: { name: 'Llama', description: 'Meta\'s open-source model' },
}

export const CHANNEL_LABELS: Record<Channel, { name: string, icon: string }> = {
  [Channel.SLACK]: { name: 'Slack', icon: '💬' },
  [Channel.DISCORD]: { name: 'Discord', icon: '🎮' },
  [Channel.TELEGRAM]: { name: 'Telegram', icon: '✈️' },
  [Channel.WHATSAPP]: { name: 'WhatsApp', icon: '📱' },
  [Channel.EMAIL]: { name: 'Email', icon: '📧' },
}

export const PRICING_TIERS = [
  {
    tier: SubscriptionTier.PRO,
    name: 'Pro',
    monthlyPrice: 49,
    annualPrice: 39,
    agentLimit: 3,
    popular: true,
    features: [
      'All premium skills',
      'All channels',
      'Advanced analytics',
      'Priority support',
      'Custom personalities',
      'Behavior automation',
    ],
  },
  {
    tier: SubscriptionTier.TEAM,
    name: 'Team',
    monthlyPrice: 149,
    annualPrice: 119,
    agentLimit: 10,
    popular: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Multi-agent workflows',
      'Dedicated support',
      'API access',
      'SSO authentication',
    ],
  },
  {
    tier: SubscriptionTier.BUSINESS,
    name: 'Business',
    monthlyPrice: 399,
    annualPrice: 319,
    agentLimit: 25,
    popular: false,
    features: [
      'Everything in Team',
      'Custom integrations',
      'Audit logs',
      'SOC 2 compliance',
      'Dedicated account manager',
      'SLA guarantee',
      'White-label option',
    ],
  },
  {
    tier: SubscriptionTier.AGENCY,
    name: 'Agency',
    monthlyPrice: 899,
    annualPrice: 719,
    agentLimit: 100,
    popular: false,
    features: [
      'Everything in Business',
      'White-label dashboard',
      'Client sub-accounts',
      'Reseller margin controls',
      'Custom branding & domain',
      'Multi-tenant management',
      'Priority onboarding',
      'Revenue share program',
      'Dedicated solutions engineer',
      'Industry vertical templates',
    ],
  },
  {
    tier: SubscriptionTier.ENTERPRISE,
    name: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    agentLimit: -1,
    popular: false,
    features: [
      'Unlimited AI employees',
      'Custom integrations',
      'SOC 2 compliance',
      'Dedicated support team',
      'Custom SLA',
      'On-premise option',
    ],
  },
] as const

export const INDUSTRY_LABELS: Record<Industry, string> = {
  [Industry.LAW]: 'Law Firms',
  [Industry.PRIVATE_EQUITY]: 'Private Equity',
  [Industry.ACCOUNTING]: 'Accounting',
  [Industry.HEALTHCARE]: 'Healthcare',
}

export const API_ROUTES = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    GOOGLE: '/auth/google',
    ME: '/auth/me',
  },
  AGENTS: {
    BASE: '/agents',
    BY_ID: (id: string) => `/agents/${id}`,
  },
  SUBSCRIPTIONS: {
    ME: '/subscriptions/me',
    BASE: '/subscriptions',
  },
  CONTACT: '/contact',
  PUBLIC: {
    PRICING: '/public/pricing',
    ROLES: '/public/roles',
    INDUSTRIES: '/public/industries',
    INDUSTRY: (slug: string) => `/public/industries/${slug}`,
  },
} as const
