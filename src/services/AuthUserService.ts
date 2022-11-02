import { User } from '../app/models/User'
import { userRepository } from '../repositories/userRepository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import 'dotenv/config'
import { jwt } from '../config/auth'

interface IGet {
  email: string
  password: string
}

export class AuthUserService {
  public async execute({ email, password }: IGet): Promise<string> {
    const user = await userRepository.findOneBy({ email })
    if (!user) {
      throw new Error('Email/password is wrong.')
    }

    const noPassword = await compare(password, user.password)
    if (!noPassword) {
      throw new Error('Email/password is wrong.')
    }

    const id = user.id

    const { secret, expiresIn } = jwt
    const token = sign({ id }, secret, {
      expiresIn,
    })

    return token
  }
}
