import express from 'express'
import { AppDataSource } from './database/data-source'
import { handleError } from './middlewares/HandleError'
import { routes } from './routes/index.routes'

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Data Source has been initialized!')
  })
  .then(() => {
    const app = express()

    app.use(express.json())

    app.use(routes)

    app.use(handleError)

    return app.listen(3000, () => {
      console.log('🚀 Server is running!')
    })
  })
  .catch(err => {
    return console.error('❌ Error during Data Source initialization', err)
  })
