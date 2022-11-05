import { userRepository } from '../repositories/userRepository'
import { hash } from 'bcryptjs'

interface IRequest {
  id: string
  name: string
  email: string
  password: string
}

export class UpdateUserService {
  async execute({ id, name, email, password }: IRequest) {
    const user = await userRepository.findOneBy({ id })

    if (!user) {
      throw new Error('User does not exists!')
    }
    const hashedPass = await hash(password, 8)

    user.name = name ? name : user.name
    user.email = email ? email : user.email
    user.password = password ? hashedPass : user.password
    await userRepository.save(user)

    return user
  }
}