import { Request, Response, NextFunction } from 'express'

export function middlerwareError(
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
