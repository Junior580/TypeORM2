import { Request, Response } from 'express'
import { GetUserSerice } from '../services/GetUserService'

export class GetUserController {
  async handle(req: Request, res: Response) {
    const getUser = new GetUserSerice()
    const users = await getUser.execute()
    return res.status(201).json(users)
  }
}
