import { z } from 'zod'
import { AgentStatus, AgentType } from './constants'

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
  config: z.record(z.unknown()).optional(),
})

export const updateAgentSchema = createAgentSchema.partial().extend({
  status: z.nativeEnum(AgentStatus).optional(),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type CreateAgentInput = z.infer<typeof createAgentSchema>
export type UpdateAgentInput = z.infer<typeof updateAgentSchema>
