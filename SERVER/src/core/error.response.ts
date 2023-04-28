import { ReasonStatusCode, StatusCode } from '../utils/constant'

class ErrorReponse extends Error {
   status: number | string
   constructor(message: string, status: number | string) {
      super(message)
      this.status = status
   }
}

export class ConflictRequestError extends ErrorReponse {
   constructor(message: string = ReasonStatusCode.CONFLICT, statusCode: number = StatusCode.CONFLICT) {
      super(message, statusCode)
   }
}

export class BadRequestError extends ErrorReponse {
   constructor(message: string = ReasonStatusCode.BAD_REQUEST, statusCode: number = StatusCode.BAD_REQUEST) {
      super(message, statusCode)
   }
}
export class AuthFailedError extends ErrorReponse {
   constructor(message: string = ReasonStatusCode.UNATHORIZED, statusCode: number = StatusCode.UNATHORIZED) {
      super(message, statusCode)
   }
}
export class NotFoundError extends ErrorReponse {
   constructor(message: string = ReasonStatusCode.NOT_FOUND, statusCode: number = StatusCode.NOT_FOUND) {
      super(message, statusCode)
   }
}
export class ForbiddenError extends ErrorReponse {
   constructor(message: string = ReasonStatusCode.FORBIDDEN, statusCode: number = StatusCode.FORBIDDEN) {
      super(message, statusCode)
   }
}
