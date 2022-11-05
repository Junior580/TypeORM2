import { Router, Request, Response } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { GetUserController } from '../controllers/GetUserController'
import { CreateUserController } from '../controllers/CreateUserController'
import { AuthUserController } from '../controllers/AuthUserController'

export const createUser = Router()

createUser.post('/', new CreateUserController().handle)
createUser.get('/login', ensureAuthenticated, new GetUserController().handle)
createUser.post('/login', new AuthUserController().handle)
