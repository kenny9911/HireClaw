import { Router } from 'express'
import authRouter from './auth'
import agentsRouter from './agents'
import oauthRouter from './oauth'
import subscriptionsRouter from './subscriptions'
import contactRouter from './contact'
import publicRouter from './public'

const router = Router()

router.use('/auth', authRouter)
router.use('/auth/google', oauthRouter)
router.use('/agents', agentsRouter)
router.use('/subscriptions', subscriptionsRouter)
router.use('/contact', contactRouter)
router.use('/public', publicRouter)

export default router
