import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './database/data-source'
import { middlerwareError } from './middlewares/errorMiddleware'
import { routes } from './routes/index.routes'

const app = express()

app.get('/', (req, res) => {
  throw new Error('erro new error')
})

app.use(express.json())
app.use(routes)

app.use(middlerwareError)

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Data Source has been initialized!')
  })
  .then(() => {
    return app.listen(3000, () => {
      console.log('🚀 Server is running!')
    })
  })
  .catch(err => {
    console.error('❌ Error during Data Source initialization', err)
  })
