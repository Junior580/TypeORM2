import { Request, Response } from 'express'
import { CreateCommentService } from '../services/CreateCommentService'

export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { comment } = req.body

    const userComment = new CreateCommentService()

    const comments = await userComment.execute({ id, comment })

    return res.status(201).json(comments)
  }
}
