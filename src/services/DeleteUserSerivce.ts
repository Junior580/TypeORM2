import { userRepository } from '../repositories/userRepository'

export class DeleteUserService {
  async execute(id: string) {
    const user = await userRepository.findOneBy({ id })
    if (!user) {
      throw new Error('User does not exists!')
    }

    await userRepository.delete(id)
  }
}
