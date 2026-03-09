import prisma from '../lib/prisma'

export async function createAgent(
  data: { name: string, type: string, config?: Record<string, unknown> },
  userId: string,
) {
  return prisma.agent.create({
    data: {
      name: data.name,
      type: data.type as any,
      config: (data.config ?? {}) as any,
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
  data: { name?: string, type?: string, status?: string, config?: Record<string, unknown> },
) {
  const agent = await prisma.agent.findFirst({ where: { id, userId } })
  if (!agent) return null
  return prisma.agent.update({
    where: { id },
    data: data as any,
  })
}

export async function deleteAgent(id: string, userId: string) {
  const agent = await prisma.agent.findFirst({ where: { id, userId } })
  if (!agent) return null
  return prisma.agent.delete({ where: { id } })
}
