import { userRepository } from '../repositories/userRepository'

export class GetUserSerice {
  public async execute() {
    const user = await userRepository.find()
    if (user.length === 0) {
      throw new Error('Nothing user exists!')
    }

    return user
  }
}
