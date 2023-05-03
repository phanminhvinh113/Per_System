import { StatusCode } from '../../utils/constant'
import { ConflictRequestError } from '../../core/error.response'
import { inventoryModel } from '../inventory.model'

export const insertInvProduct = async ({
   productId,
   shopId,
   location,
   stock,
}: {
   productId: string | object
   shopId: string | object
   location: string
   stock: number
}) => {
   const inventory = await inventoryModel.create({
      inv_productId: productId,
      inv_shopId: shopId,
      inv_location: location ? location : 'unknown',
      inv_stock: stock,
   })
   if (!inventory) throw new ConflictRequestError('Wrong Server!')
   return {
      code: 0,
      status: StatusCode.SUCCESS,
      message: 'OK',
      data: inventory,
   }
}
