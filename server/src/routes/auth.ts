import { Router } from 'express'
import { loginSchema, registerSchema } from '@hireclaw/shared'
import prisma from '../lib/prisma'
import { hashPassword, comparePassword, generateToken } from '../services/auth.service'
import { authMiddleware, AuthRequest } from '../middleware/auth'
import { validate } from '../middleware/validate'
import { ApiError } from '../utils/apiError'

const router = Router()

router.post('/register', validate(registerSchema), async (req, res, next) => {
  try {
    const { email, password, name } = req.body

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      throw ApiError.badRequest('Email already in use')
    }

    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    })

    const token = generateToken({ id: user.id, email: user.email })

    res.status(201).json({
      success: true,
      data: {
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
        token,
      },
    })
  } catch (err) {
    next(err)
  }
})

router.post('/login', validate(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      throw ApiError.unauthorized('Invalid email or password')
    }

    const valid = await comparePassword(password, user.password)
    if (!valid) {
      throw ApiError.unauthorized('Invalid email or password')
    }

    const token = generateToken({ id: user.id, email: user.email })

    res.json({
      success: true,
      data: {
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
        token,
      },
    })
  } catch (err) {
    next(err)
  }
})

router.get('/me', authMiddleware, async (req: AuthRequest, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: { id: true, email: true, name: true, role: true, createdAt: true, updatedAt: true },
    })

    if (!user) {
      throw ApiError.notFound('User not found')
    }

    res.json({ success: true, data: user })
  } catch (err) {
    next(err)
  }
})

export default router
