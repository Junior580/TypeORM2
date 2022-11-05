import { userRepository } from '../repositories/userRepository'

interface IRequest {
  name: string
  email: string
  password: string
}
export class GetUserSerice {
  public async execute() {
    const user = await userRepository.find()

    return user
  }
}
