import { userRepository } from '../repositories/userRepository'
import { commentRepository } from '../repositories/commentRepository'
import { Comment } from '../app/models/Comment'
import { v4 as uuid } from 'uuid'
import AppError from '../errors/AppError'

interface IRequest {
  comments: string
  user_id: string
}

export class CreateCommentService {
  public async execute({ user_id, comments }: IRequest): Promise<Comment> {
    const user = await userRepository.findOneBy({ id: user_id })

    if (!user) {
      throw new AppError('User does not Exists!', 401)
    }

    if (!comments) {
      throw new AppError('Comment is madatory!', 401)
    }

    const { password: _, created_at: __, updated_at: ___, ...userReturn } = user

    const userComment = commentRepository.create({
      id: uuid(),
      comments,

      user: userReturn,
    })

    await commentRepository.save(userComment)

    return userComment
  }
}
