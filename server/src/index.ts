import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { env } from './config/env'
import { errorHandler } from './middleware/errorHandler'
import router from './routes'

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'HireClaw API is running' })
})

app.use('/api', router)

app.use(errorHandler)

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`)
})

export default app
