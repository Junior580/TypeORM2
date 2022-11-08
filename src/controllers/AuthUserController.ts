import { AuthUserService } from '../services/AuthUserService'
import { Request, Response } from 'express'

export class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body
    const getUser = new AuthUserService()
    const token = await getUser.execute({ email, password })
    return res.status(200).json({ login: 'Login sucessfull', token })
  }
}
