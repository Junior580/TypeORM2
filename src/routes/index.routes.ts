import { Router } from 'express'
import { createUser } from './user.routes'

export const routes = Router()

routes.use('/users', createUser)
