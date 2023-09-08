import { ReasonStatusCode, StatusCode } from '../utils/constant'
import { Response } from 'express'

export class ErrorResponse extends Error {
   status: number
   constructor(message: string, status: number) {
      super(message)
      this.status = status
   }
   public send(res: Response) {
      return res.status(this.status).json(this)
   }
}

export class ConflictRequestError extends ErrorResponse {
   constructor(message: string = ReasonStatusCode.CONFLICT, statusCode: number = StatusCode.CONFLICT) {
      super(message, statusCode)
   }
}

export class BadRequestError extends ErrorResponse {
   constructor(message: string = ReasonStatusCode.BAD_REQUEST, statusCode: number = StatusCode.BAD_REQUEST) {
      super(message, statusCode)
   }
}
export class AuthFailedError extends ErrorResponse {
   constructor(message: string = ReasonStatusCode.UNAUTHORIZED, statusCode: number = StatusCode.UNAUTHORIZED) {
      super(message, statusCode)
   }
}
export class NotFoundError extends ErrorResponse {
   constructor(message: string = ReasonStatusCode.NOT_FOUND, statusCode: number = StatusCode.NOT_FOUND) {
      super(message, statusCode)
   }
}
export class ForbiddenError extends ErrorResponse {
   constructor(message: string = ReasonStatusCode.FORBIDDEN, statusCode: number = StatusCode.FORBIDDEN) {
      super(message, statusCode)
   }
}
