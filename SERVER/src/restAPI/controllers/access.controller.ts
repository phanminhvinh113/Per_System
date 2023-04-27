import { Request, Response } from 'express'
import accessService from '../service/access.service'

class accessController {
   register = async (req: Request, res: Response) => {
      try {
         const response: any = await accessService.registerService(req.body)
         return res.status(response?.status || 200).json(response)
      } catch (error) {
         console.log(error)
         return res.status(500).json({
            code: -1,
            status: 500,
            message: `Server error!`,
         })
      }
   }
}
export default new accessController()
