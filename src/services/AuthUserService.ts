import { userRepository } from '../repositories/userRepository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import 'dotenv/config'
import { jwt } from '../config/auth'
import AppError from '../errors/AppError'

interface IGet {
  email: string
  password: string
}

export class AuthUserService {
  public async execute({ email, password }: IGet): Promise<string> {
    const user = await userRepository.findOneBy({ email })

    if (!user) {
      throw new AppError('Email/password is wrong.', 401)
    }

    const noPassword = await compare(password, user.password)

    if (!noPassword) {
      throw new AppError('Email/password is wrong.', 401)
    }

    const id = user.id

    const { secret, expiresIn } = jwt

    const token = sign({ id }, secret, {
      expiresIn,
    })

    return token
  }
}
