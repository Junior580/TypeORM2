import { Request, Response } from 'express'
import { UpdateUserService } from '../services/UpdateUserService'

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const id = req.params.id
    const { name, email, password } = req.body
    const user = new UpdateUserService()
    const userUpdated = await user.execute({ id, name, email, password })
    return res
      .status(200)
      .json({ msg: 'User successfully updated!', userUpdated })
  }
}
