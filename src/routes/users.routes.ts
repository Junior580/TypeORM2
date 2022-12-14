import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { GetUserController } from '../controllers/GetUserController'
import { CreateUserController } from '../controllers/CreateUserController'
import { AuthUserController } from '../controllers/AuthUserController'
import { DeleteUserController } from '../controllers/DeleteUserController'
import { UpdateUserController } from '../controllers/UpdateUserController'

export const usersRoutes = Router()

//route without auth to create new user
usersRoutes.post('/', new CreateUserController().handle)

//route to auth user
usersRoutes.post('/login', new AuthUserController().handle)

//route to get user, you need JWT token
usersRoutes.get('/login', ensureAuthenticated, new GetUserController().handle)
usersRoutes.put(
  '/login/:id',
  ensureAuthenticated,
  new UpdateUserController().handle
)
usersRoutes.delete(
  '/login/:id',
  ensureAuthenticated,
  new DeleteUserController().handle
)
