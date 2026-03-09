import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../utils/apiError'
import { env } from '../config/env'

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode = err instanceof ApiError ? err.statusCode : 500
  const message = err.message || 'Internal Server Error'

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(env.NODE_ENV === 'development' && { stack: err.stack }),
  })
}
