import { User } from '../app/models/User'
import { userRepository } from '../repositories/userRepository'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

interface IRequest {
  name: string
  email: string
  password: string
}
export class CreateUserSerice {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await userRepository.findOneBy({ email })

    if (userExists) {
      throw new Error('User already exists!')
    }

    const hashedPass = await hash(password, 8)

    const user = userRepository.create({
      id: uuid(),
      name,
      email,
      password: hashedPass,
    })

    await userRepository.save(user)

    return user
  }
}
