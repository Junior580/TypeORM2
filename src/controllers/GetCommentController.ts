import { Request, Response } from 'express'
import { GetCommentService } from '../services/GetCommentService'

export class GetCommentController {
  async handle(req: Request, res: Response) {
    const getComment = new GetCommentService()

    const comment = await getComment.execute()

    return res.status(201).json(comment)
  }
}
