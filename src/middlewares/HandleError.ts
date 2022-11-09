import 'express-async-errors'
import { Request, Response, NextFunction } from 'express'

export function handleError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof Error) {
    return res.status(500).send({ Error: error.message })
  }
  return res.status(500).send({ msg: error })
}
