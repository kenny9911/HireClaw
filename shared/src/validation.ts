import { z } from 'zod'
import { AgentStatus, AgentType, Channel, LLMModel } from './constants'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
})

export const createAgentSchema = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(AgentType),
  model: z.nativeEnum(LLMModel).default(LLMModel.GPT_4O),
  channel: z.nativeEnum(Channel).default(Channel.EMAIL),
  instructions: z.string().optional(),
  brandVoice: z.string().optional(),
  approvalGate: z.boolean().default(false),
  config: z.record(z.unknown()).optional(),
})

export const updateAgentSchema = createAgentSchema.partial().extend({
  status: z.nativeEnum(AgentStatus).optional(),
})

export const contactSalesSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

export const roiCalculatorSchema = z.object({
  employeeCount: z.number().min(1).max(100),
  hourlyRate: z.number().min(1).max(500),
  dailyAdminHours: z.number().min(1).max(24),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export const resetPasswordSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(8),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type CreateAgentInput = z.infer<typeof createAgentSchema>
export type UpdateAgentInput = z.infer<typeof updateAgentSchema>
export type ContactSalesInput = z.infer<typeof contactSalesSchema>
export type ROICalculatorInput = z.infer<typeof roiCalculatorSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
