import crypto from 'crypto'
import prisma from '../lib/prisma'
import { hashPassword } from './auth.service'
import { sendPasswordResetEmail } from './email.service'
import { ApiError } from '../utils/apiError'

const TOKEN_EXPIRY_MS = 60 * 60 * 1000 // 1 hour

export async function requestPasswordReset(email: string) {
  const user = await prisma.user.findUnique({ where: { email } })

  // Always return success to prevent email enumeration
  if (!user) return

  // Don't allow reset for Google-only accounts (no password set and has googleId)
  if (!user.password && user.googleId) return

  // Invalidate any existing unused tokens for this user
  await prisma.passwordReset.updateMany({
    where: { userId: user.id, usedAt: null },
    data: { usedAt: new Date() },
  })

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS)

  await prisma.passwordReset.create({
    data: {
      userId: user.id,
      token,
      expiresAt,
    },
  })

  await sendPasswordResetEmail(user.email, user.name, token)
}

export async function resetPassword(token: string, newPassword: string) {
  const resetRecord = await prisma.passwordReset.findUnique({
    where: { token },
    include: { user: true },
  })

  if (!resetRecord) {
    throw ApiError.badRequest('Invalid or expired reset link')
  }

  if (resetRecord.usedAt) {
    throw ApiError.badRequest('This reset link has already been used')
  }

  if (resetRecord.expiresAt < new Date()) {
    throw ApiError.badRequest('This reset link has expired')
  }

  const hashedPassword = await hashPassword(newPassword)

  await prisma.$transaction([
    prisma.user.update({
      where: { id: resetRecord.userId },
      data: { password: hashedPassword },
    }),
    prisma.passwordReset.update({
      where: { id: resetRecord.id },
      data: { usedAt: new Date() },
    }),
  ])
}
