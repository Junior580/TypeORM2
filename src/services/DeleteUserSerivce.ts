import { userRepository } from '../repositories/userRepository'
import AppError from '../errors/AppError'
export class DeleteUserService {
  async execute(id: string) {
    const user = await userRepository.findOneBy({ id })

    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    await userRepository.delete(id)
  }
}
