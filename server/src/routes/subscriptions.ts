import { Router } from 'express'
import { authMiddleware, AuthRequest } from '../middleware/auth'
import { ApiError } from '../utils/apiError'
import {
  getSubscription,
  createSubscription,
  updateSubscription,
  cancelSubscription,
} from '../services/subscription.service'

const router = Router()

router.use(authMiddleware)

router.get('/me', async (req: AuthRequest, res, next) => {
  try {
    const subscription = await getSubscription(req.user!.id)
    if (!subscription) {
      throw ApiError.notFound('No subscription found')
    }
    res.json({ success: true, data: subscription })
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req: AuthRequest, res, next) => {
  try {
    const { tier, billingCycle } = req.body
    if (!tier || !billingCycle) {
      throw ApiError.badRequest('tier and billingCycle are required')
    }

    const existing = await getSubscription(req.user!.id)
    if (existing) {
      throw ApiError.badRequest('Subscription already exists. Use PATCH to update.')
    }

    const subscription = await createSubscription(req.user!.id, tier, billingCycle)
    res.status(201).json({ success: true, data: subscription })
  } catch (err) {
    next(err)
  }
})

router.patch('/', async (req: AuthRequest, res, next) => {
  try {
    const { tier, billingCycle } = req.body
    if (!tier && !billingCycle) {
      throw ApiError.badRequest('Provide tier or billingCycle to update')
    }

    const subscription = await updateSubscription(req.user!.id, { tier, billingCycle })
    res.json({ success: true, data: subscription })
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req: AuthRequest, res, next) => {
  try {
    const subscription = await cancelSubscription(req.user!.id)
    res.json({ success: true, data: subscription })
  } catch (err) {
    next(err)
  }
})

export default router
