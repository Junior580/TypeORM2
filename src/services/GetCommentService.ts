import AppError from '../errors/AppError'
import { commentRepository } from '../repositories/commentRepository'

export class GetCommentService {
  public async execute() {
    const comment = await commentRepository.find({
      relations: { user: true },
    })

    const userReturn = comment.map(item => {
      const container = {
        name: item.user.name,
        comment: [item.comments, item.comments],
      }
      return container
    })

    if (comment.length === 0) {
      throw new AppError('Nothing comment exists!', 401)
    }
    console.log(userReturn)
    return userReturn
  }
}
