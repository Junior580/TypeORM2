import { Request, Response } from 'express'
import { CreateUserSerice } from '../services/CreateUserService'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body
    const CreateUser = new CreateUserSerice()
    const user = await CreateUser.execute({ name, email, password })
    const { password: _, ...userReturn } = user
    return res.status(201).json(userReturn)
  }
}
