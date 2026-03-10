import { Router } from 'express'
import { contactSalesSchema } from '@hireclaw/shared'
import { validate } from '../middleware/validate'
import { createContactSubmission } from '../services/contact.service'

const router = Router()

router.post('/', validate(contactSalesSchema), async (req, res, next) => {
  try {
    const submission = await createContactSubmission(req.body)
    res.status(201).json({ success: true, data: submission })
  } catch (err) {
    next(err)
  }
})

export default router
