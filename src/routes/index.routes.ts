import { Router } from 'express'
import { commentRoutes } from './comments.routes'
import { usersRoutes } from './users.routes'

export const routes = Router()

routes.use('/users', usersRoutes)

routes.use('/comments', commentRoutes)
