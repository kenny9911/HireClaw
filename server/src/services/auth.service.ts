import bcrypt from 'bcryptjs'
import jwt, { SignOptions } from 'jsonwebtoken'
import { env } from '../config/env'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function generateToken(payload: { id: string, email: string }): string {
  const options: SignOptions = { expiresIn: env.JWT_EXPIRES_IN as unknown as SignOptions['expiresIn'] }
  return jwt.sign(payload, env.JWT_SECRET, options)
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET)
}
