import { Request, Response } from 'express'
import { CreateCommentService } from '../services/CreateCommentService'

export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { comments } = req.body

    const userComment = new CreateCommentService()

    const comment = await userComment.execute({ id, comments })

    return res.status(201).json(comment)
  }
}
