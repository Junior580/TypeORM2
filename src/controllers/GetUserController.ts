import { Request, Response } from 'express'
import { GetUserSerice } from '../services/GetUserService'

export class GetUserController {
  async handle(req: Request, res: Response) {
    try {
      const getUser = new GetUserSerice()
      const users = await getUser.execute()
      return res.status(201).json(users)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json(error.message)
      }
    }
  }
}
