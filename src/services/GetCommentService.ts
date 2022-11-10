import AppError from '../errors/AppError'
import { commentRepository } from '../repositories/commentRepository'

export class GetCommentService {
  public async execute() {
    const comment = await commentRepository.find({})

    if (comment.length === 0) {
      throw new AppError('Nothing comment exists!', 401)
    }
    return comment
  }
}
