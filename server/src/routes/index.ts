import { Router } from 'express'
import authRouter from './auth'
import agentsRouter from './agents'

const router = Router()

router.use('/auth', authRouter)
router.use('/agents', agentsRouter)

export default router
