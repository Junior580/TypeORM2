import { userRepository } from '../repositories/userRepository'
import { commentRepository } from '../repositories/commentRepository'
import { Comment } from '../app/models/Comment'
import { v4 as uuid } from 'uuid'
import AppError from '../errors/AppError'

interface IRequest {
  comment: string
  id: string
}

export class CreateCommentService {
  public async execute({ id, comment }: IRequest): Promise<Comment> {
    const userID = await userRepository.findOneBy({ id })

    if (!userID) {
      throw new AppError('User does not Exists!', 401)
    }

    if (!comment) {
      throw new AppError('Comment is madatory!', 401)
    }

    const userComment = commentRepository.create({
      id: uuid(),
      comments: comment,
    })

    await commentRepository.save(userComment)

    return userComment
  }
}
