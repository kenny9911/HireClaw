import { Router } from 'express'
import { createAgentSchema, updateAgentSchema } from '@hireclaw/shared'
import { authMiddleware, AuthRequest } from '../middleware/auth'
import { validate } from '../middleware/validate'
import { ApiError } from '../utils/apiError'
import * as agentService from '../services/agent.service'

const router = Router()

router.use(authMiddleware)

router.get('/', async (req: AuthRequest, res, next) => {
  try {
    const agents = await agentService.getAgentsByUser(req.user!.id)
    res.json({ success: true, data: agents })
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req: AuthRequest, res, next) => {
  try {
    const agent = await agentService.getAgentById(req.params.id as string, req.user!.id)
    if (!agent) throw ApiError.notFound('Agent not found')
    res.json({ success: true, data: agent })
  } catch (err) {
    next(err)
  }
})

router.post('/', validate(createAgentSchema), async (req: AuthRequest, res, next) => {
  try {
    const agent = await agentService.createAgent(req.body, req.user!.id)
    res.status(201).json({ success: true, data: agent })
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', validate(updateAgentSchema), async (req: AuthRequest, res, next) => {
  try {
    const agent = await agentService.updateAgent(req.params.id as string, req.user!.id, req.body)
    if (!agent) throw ApiError.notFound('Agent not found')
    res.json({ success: true, data: agent })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req: AuthRequest, res, next) => {
  try {
    const agent = await agentService.deleteAgent(req.params.id as string, req.user!.id)
    if (!agent) throw ApiError.notFound('Agent not found')
    res.json({ success: true, message: 'Agent deleted' })
  } catch (err) {
    next(err)
  }
})

export default router
