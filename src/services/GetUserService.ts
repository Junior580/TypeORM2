import { userRepository } from '../repositories/userRepository'
import AppError from '../errors/AppError'
export class GetUserSerice {
  public async execute() {
    const user = await userRepository.find()

    if (user.length === 0) {
      throw new AppError('Nothing user exists!', 401)
    }

    return user
  }
}
