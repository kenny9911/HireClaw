import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'
import { ApiError } from '../utils/apiError'

export function validate(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      const messages = result.error.errors.map((e) => e.message).join(', ')
      throw ApiError.badRequest(messages)
    }
    req.body = result.data
    next()
  }
}
