import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { GetUserController } from '../controllers/GetUserController'
import { CreateUserController } from '../controllers/CreateUserController'
import { AuthUserController } from '../controllers/AuthUserController'
import { DeleteUserController } from '../controllers/DeleteUserController'
import { UpdateUserController } from '../controllers/UpdateUserController'

export const createUser = Router()

//route without auth to create new user
createUser.post('/', new CreateUserController().handle)
//route to auth user
createUser.post('/login', new AuthUserController().handle)

//route to get user, you need JWT token
createUser.get('/login', ensureAuthenticated, new GetUserController().handle)
createUser.put(
  '/login/:id',
  ensureAuthenticated,
  new UpdateUserController().handle
)
createUser.delete(
  '/login/:id',
  ensureAuthenticated,
  new DeleteUserController().handle
)
