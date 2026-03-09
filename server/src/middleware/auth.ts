import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../services/auth.service'
import { ApiError } from '../utils/apiError'

export interface AuthRequest extends Request {
  user?: { id: string, email: string }
}

export function authMiddleware(req: AuthRequest, _res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    throw ApiError.unauthorized('No token provided')
  }

  const token = header.split(' ')[1]
  try {
    const payload = verifyToken(token) as { id: string, email: string }
    req.user = payload
    next()
  } catch {
    throw ApiError.unauthorized('Invalid or expired token')
  }
}
