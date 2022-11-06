import { userRepository } from '../repositories/userRepository'
import { commentRepository } from '../repositories/commentRepository'

interface IRequest {
  comment: string
  user_id: number
}

export class CreateCommentService {
  async execute({ comment, user_id }: IRequest) {
    const userID = await userRepository.findOneBy({ id: user_id })

    if (!userID) {
      throw new Error('User does not Exists!')
    }
  }
}
