import AppError from '../errors/AppError'
// import { commentRepository } from '../repositories/commentRepository'
import { userRepository } from '../repositories/userRepository'

export class GetCommentService {
  public async execute() {
    // const comment = await commentRepository.find({
    //   relations: { user: true },
    // })

    const user = await userRepository.find({
      relations: {
        comments: true,
      },
    })
    console.log(user)
    let i = 0

    while (i < user.length) {
      console.log(user[i].name)
      console.log(user[i].comments[0].comments)

      i++
    }

    if (user.length === 0) {
      throw new AppError('Nothing comment exists!', 401)
    }

    return user
  }
}
