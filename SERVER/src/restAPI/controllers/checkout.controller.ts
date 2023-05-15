import { Request, Response } from 'express'
import CheckoutService from '../service/checkout.service'

class CheckoutController {
   public checkoutReview = async (req: Request, res: Response) => {
      try {
         const payload: any = req.body
         const userId = req.User?.userId
         return res.status(201).json(await CheckoutService.CheckoutReview({ ...payload, userId }))
      } catch (error) {
         return res.status(403).json({
            code: -1,
            status: error.status,
            message: error?.message,
         })
      }
   }
}
export default new CheckoutController()
