import { ReasonStatusCode, StatusCode } from '../utils/constant'

class SuccessResponse {
   message: string
   status: number
   reasonStatusCode: string
   data: any
   constructor(message: string, statusCode: number = StatusCode.SUCCESS, reasonStatusCode: string = ReasonStatusCode.SUCCESS, data: any = {}) {
      this.message = !message ? reasonStatusCode : message
      this.status = statusCode
      this.data = data
   }
   send(res: any, _headers: object = {}) {
      return res.status(this.status).json(this)
   }
}
export class SUCCESS extends SuccessResponse {
   constructor(message: string, data: any) {
      super(message, data)
   }
}

export class COMPLETED extends SuccessResponse {
   constructor(message: string, statusCode: number = StatusCode.COMPLETED, reasonStatusCode: string = ReasonStatusCode.COMPLETED, data: any) {
      super(message, statusCode, reasonStatusCode, data)
   }
}
