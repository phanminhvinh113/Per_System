import { Request, Response } from 'express'
import productService from '../service/product.service'

require('dotenv').config()
//
class ProductController {
   createProduct = async (req: Request, res: Response) => {
      try {
         //
         console.log(req.User?.userId)
         const payload = { ...req.body, shop_id: req.User?.userId }
         const type: string = req.body?.type
         //
         return res.status(201).json(await productService.createProduct(type, payload))
         //
      } catch (error) {
         return res.status(403).json({
            code: -1,
            status: error.status || 403,
            message: error?.message,
         })
      }
   }
}
export default new ProductController()
