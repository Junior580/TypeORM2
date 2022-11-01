import { Comment } from '../app/models/Coments'
import { commentRepository } from '../repositories/commentRepository'
import { v4 as uuid } from 'uuid'

interface IRequest {
  comment: string
}
export class CreateCommentService {
  public async execute({ comment }: IRequest) {
    const commentExists = await commentRepository.findOneBy({ comment })

    if (commentExists) {
      throw new Error('Comment already exists!')
    }

    const comments = commentRepository.create({ comment })

    await commentRepository.save(comments)

    return comments
  }
}
