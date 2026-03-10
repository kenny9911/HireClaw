import { Router } from 'express'
import { OAuth2Client } from 'google-auth-library'
import prisma from '../lib/prisma'
import { generateToken } from '../services/auth.service'
import { env } from '../config/env'
import { ApiError } from '../utils/apiError'

const router = Router()

router.post('/', async (req, res, next) => {
  try {
    if (!env.GOOGLE_CLIENT_ID) {
      throw ApiError.internal('Google OAuth not configured')
    }

    const { idToken } = req.body
    if (!idToken) {
      throw ApiError.badRequest('idToken is required')
    }

    const client = new OAuth2Client(env.GOOGLE_CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken,
      audience: env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()
    if (!payload) {
      throw ApiError.unauthorized('Invalid Google token')
    }

    const { sub: googleId, email, name, picture } = payload
    if (!email) {
      throw ApiError.badRequest('Email not available from Google account')
    }

    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { googleId },
          { email },
        ],
      },
    })

    if (user) {
      if (!user.googleId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { googleId },
        })
      }
    } else {
      user = await prisma.user.create({
        data: {
          email,
          name: name ?? email.split('@')[0],
          googleId,
          avatarUrl: picture,
        },
      })
    }

    const token = generateToken({ id: user.id, email: user.email })

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatarUrl: user.avatarUrl,
        },
        token,
      },
    })
  } catch (err) {
    next(err)
  }
})

export default router
