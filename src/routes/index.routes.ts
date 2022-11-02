import { Router } from 'express'
import { createUser } from './createUser.routes'

export const routes = Router()

routes.use('/users', createUser)
