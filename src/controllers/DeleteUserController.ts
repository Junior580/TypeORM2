import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserSerivce'

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id

    const service = new DeleteUserService()

    await service.execute(id)

    return res.status(200).json('User has been deleted!')
  }
}
