import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { jwt } from '../config/auth'

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ Unauthorized: 'Unauthorized access' })
  }

  const [, token] = authorization.split(' ')

  try {
    const { secret } = jwt

    const decoded = await verify(token, secret)

    return next()
  } catch (error) {
    return res.status(401).json({ Unauthorized: 'JWT token is missing!' })
  }
}
