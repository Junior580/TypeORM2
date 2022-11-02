import { Router, Request, Response } from 'express'
import { AuthUserService } from '../services/AuthUserService'
import { CreateUserSerice } from '../services/CreateUserService'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

export const createUser = Router()

createUser.get('/', (req: Request, res: Response) => {
  return res.json({ msg: 'teste' })
})

createUser.get(
  '/login',
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      return res.status(201).json({ email, password })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json(error.message)
      }
    }
  }
)

createUser.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    const CreateUser = new CreateUserSerice()
    const user = await CreateUser.execute({ name, email, password })
    const { password: _, ...userReturn } = user
    return res.status(201).json(userReturn)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message)
    }
  }
})

createUser.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const getUser = new AuthUserService()
    const token = await getUser.execute({ email, password })
    // console.log(user)
    return res.status(200).json({ login: 'Login sucessfull', token })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json(error.message)
    }
  }
})
