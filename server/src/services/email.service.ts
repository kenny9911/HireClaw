import nodemailer from 'nodemailer'
import { env } from '../config/env'

const transporter = env.SMTP_HOST
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    })
  : null

export async function sendPasswordResetEmail(
  to: string,
  name: string,
  resetToken: string,
) {
  const resetUrl = `${env.CLIENT_URL}/reset-password?token=${resetToken}`

  if (!transporter) {
    console.log('[DEV] Password reset link for %s: %s', to, resetUrl)
    return
  }

  await transporter.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Reset your HireClaw password',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
        <h2 style="color: #111; margin-bottom: 16px;">Reset your password</h2>
        <p style="color: #555; line-height: 1.6;">Hi ${name},</p>
        <p style="color: #555; line-height: 1.6;">
          We received a request to reset your HireClaw password. Click the button below to choose a new one. This link expires in 1 hour.
        </p>
        <a href="${resetUrl}" style="display: inline-block; margin: 24px 0; padding: 12px 32px; background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">
          Reset Password
        </a>
        <p style="color: #999; font-size: 13px; line-height: 1.5;">
          If you didn't request this, you can safely ignore this email. Your password won't change.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 16px;" />
        <p style="color: #bbb; font-size: 12px;">HireClaw — AI Employees for your business</p>
      </div>
    `,
  })
}
