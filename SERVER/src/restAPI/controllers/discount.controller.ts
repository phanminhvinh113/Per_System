import { Request, Response } from 'express'
import discountService from '../service/discount.service'
class DiscountController {
   createNewDiscount = async (req: Request, res: Response) => {
      try {
         const payload: any = req.body
         return res.status(201).json(await discountService.createDiscountCode(payload))
         //
      } catch (error) {
         return res.status(403).json({
            code: -1,
            status: error.status,
            message: error?.message,
         })
      }
   }
}
export default new DiscountController()
