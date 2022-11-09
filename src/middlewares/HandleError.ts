import 'express-async-errors'
import { Request, Response, NextFunction } from 'express'
import AppError from '../errors/AppError'

export function handleError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).send({ Error: error.message })
  }
  return res.status(500).send({ msg: error })
}
