import prisma from '../lib/prisma'
import { SubscriptionTier, BillingCycle, SubscriptionStatus } from '@hireclaw/shared'

const TIER_AGENT_LIMITS: Record<string, number> = {
  [SubscriptionTier.PRO]: 3,
  [SubscriptionTier.TEAM]: 10,
  [SubscriptionTier.BUSINESS]: 25,
  [SubscriptionTier.AGENCY]: 100,
  [SubscriptionTier.ENTERPRISE]: 999,
}

function calculatePeriodEnd(billingCycle: string): Date {
  const now = new Date()
  if (billingCycle === BillingCycle.ANNUAL) {
    return new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000)
  }
  return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
}

export async function getSubscription(userId: string) {
  return prisma.subscription.findFirst({
    where: { userId },
  })
}

export async function createSubscription(
  userId: string,
  tier: string,
  billingCycle: string,
) {
  const agentLimit = TIER_AGENT_LIMITS[tier] ?? 3
  const currentPeriodEnd = calculatePeriodEnd(billingCycle)

  return prisma.subscription.create({
    data: {
      userId,
      tier: tier as SubscriptionTier,
      billingCycle: billingCycle as BillingCycle,
      status: SubscriptionStatus.ACTIVE,
      agentLimit,
      currentPeriodEnd,
    },
  })
}

export async function updateSubscription(
  userId: string,
  data: { tier?: string, billingCycle?: string },
) {
  const updateData: Record<string, unknown> = {}

  if (data.tier) {
    updateData.tier = data.tier
    updateData.agentLimit = TIER_AGENT_LIMITS[data.tier] ?? 3
  }

  if (data.billingCycle) {
    updateData.billingCycle = data.billingCycle
    updateData.currentPeriodEnd = calculatePeriodEnd(data.billingCycle)
  }

  return prisma.subscription.update({
    where: { userId },
    data: updateData,
  })
}

export async function cancelSubscription(userId: string) {
  return prisma.subscription.update({
    where: { userId },
    data: { status: SubscriptionStatus.CANCELLED },
  })
}

export async function checkAgentLimit(userId: string) {
  const subscription = await prisma.subscription.findFirst({
    where: { userId },
  })

  const limit = subscription?.agentLimit ?? 0
  const current = await prisma.agent.count({ where: { userId } })

  return {
    allowed: current < limit,
    current,
    limit,
  }
}
