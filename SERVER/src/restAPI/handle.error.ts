import { NextFunction, Request, Response } from 'express'
//
class RequestErr extends Error {
   status: number
   constructor(message: string, status: number) {
      super(message)
      this.status = status
   }
}
export const RequestError = async (_req: Request, _res: Response, next: NextFunction) => {
   const error = new RequestErr('Not Found!', 404)
   return next(error)
}

export const ErrorHandler = async (err: RequestErr, _req: Request, res: Response, _next: NextFunction) => {
   res.status(err.status || 500)
   res.json({
      code: err.status,
      message: 'Error',
      error: err.message,
   })
}
