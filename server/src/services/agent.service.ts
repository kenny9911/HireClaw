import { AgentType, LLMModel, Channel } from '@hireclaw/shared'
import { Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export async function createAgent(
  data: {
    name: string
    type: string
    model?: string
    channel?: string
    instructions?: string
    brandVoice?: string
    approvalGate?: boolean
    config?: Record<string, unknown>
  },
  userId: string,
) {
  return prisma.agent.create({
    data: {
      name: data.name,
      type: data.type as AgentType,
      model: (data.model as LLMModel) ?? undefined,
      channel: (data.channel as Channel) ?? undefined,
      instructions: data.instructions,
      brandVoice: data.brandVoice,
      approvalGate: data.approvalGate ?? false,
      config: (data.config ?? {}) as Prisma.InputJsonValue,
      userId,
    },
  })
}

export async function getAgentsByUser(userId: string) {
  return prisma.agent.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getAgentById(id: string, userId: string) {
  return prisma.agent.findFirst({
    where: { id, userId },
  })
}

export async function updateAgent(
  id: string,
  userId: string,
  data: {
    name?: string
    type?: string
    status?: string
    model?: string
    channel?: string
    instructions?: string
    brandVoice?: string
    approvalGate?: boolean
    config?: Record<string, unknown>
  },
) {
  const agent = await prisma.agent.findFirst({ where: { id, userId } })
  if (!agent) return null
  return prisma.agent.update({
    where: { id },
    data: {
      name: data.name,
      type: data.type as AgentType | undefined,
      status: data.status as any,
      model: data.model as LLMModel | undefined,
      channel: data.channel as Channel | undefined,
      instructions: data.instructions,
      brandVoice: data.brandVoice,
      approvalGate: data.approvalGate,
      config: data.config as Prisma.InputJsonValue | undefined,
    },
  })
}

export async function deleteAgent(id: string, userId: string) {
  const agent = await prisma.agent.findFirst({ where: { id, userId } })
  if (!agent) return null
  return prisma.agent.delete({ where: { id } })
}
