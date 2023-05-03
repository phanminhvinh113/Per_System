import { discountModel } from '../../models.mongo/discount.model'
import { BadRequestError, ConflictRequestError, NotFoundError } from '../../core/error.response'
import { DiscountType } from '../../models.mongo/interface.model'
import { Types } from 'mongoose'
import { StatusCode } from '../../utils/constant'
import { findAllProduct } from '../../models.mongo/repositories/product.repo'
import { findAllDiscountCodeUnSelect } from '../../models.mongo/repositories/discount.repo'

class DiscountService {
   async createDiscountCode(payload: DiscountType) {
      const {
         code,
         start_date,
         end_date,
         apply_to_products,
         max_quantity,
         maximum_amount_per_user,
         product_ids,
         min_order_value,
         shop_id,
         type,
         value,
         description,
         is_active,
         name,
      } = payload
      //
      if (new Date() > new Date(start_date) || new Date() > new Date(end_date) || new Date(start_date) >= new Date(end_date)) {
         throw new BadRequestError('Wrong Time For Discount!')
      }
      const foundDiscount = await discountModel.findOne({ code, shop_id: new Types.ObjectId(shop_id) }).lean()
      if (foundDiscount && foundDiscount.is_active) throw new BadRequestError(' Discount Is Active!')
      //
      const newDiscount = await discountModel.create({
         name,
         type,
         value,
         code,
         description,
         is_active,
         shop_id,
         start_date: new Date(start_date),
         end_date: new Date(end_date),
         apply_to_products,
         product_ids,
         max_quantity,
         maximum_amount_per_user,
         min_order_value,
      })
      //
      if (!newDiscount) throw new ConflictRequestError('Failed!')
      return {
         code: 0,
         status: StatusCode.SUCCESS,
         message: 'OK!',
         data: newDiscount,
      }
   }
   async updateDiscountCode() {}
   async getAllDiscountCodeWithProduct(payload: any) {
      const { code, shopId, limit, page }: { code: string; shopId: string; limit: number; page: number } = payload
      //
      const findDiscount: DiscountType = await discountModel.find({ code, shop_id: new Types.ObjectId(shopId) }).lean()
      if (!findDiscount || !findDiscount.is_active) throw new NotFoundError("Discount Doesn't Exist!")
      //
      const { apply_to_products, product_ids } = findDiscount
      //
      let filter
      if (apply_to_products === 'all') {
         filter = {
            shop_id: shopId,
            isPublic: true,
         }
      }
      if (apply_to_products === 'specific') {
         filter = {
            _id: { $in: product_ids },
            isPublic: true,
         }
      }
      //
      const products: object = await findAllProduct({
         filter,
         limit: +limit,
         page: +page,
         sort: 'ctime',
         select: ['name'],
      })
      if (!products) throw new BadRequestError('Failed!')
      //
      return {
         code: 0,
         status: StatusCode.SUCCESS,
         message: 'OK!',
         data: products,
      }
   }
   async getAllDiscountCodeByShop(payload: any) {
      try {
         const { shopId, limit, page }: { shopId: string; limit: number; page: number } = payload
         const filter = { shop_id: new Types.ObjectId(shopId) }
         const unselect = ['__v']
         const discounts = await findAllDiscountCodeUnSelect({ limit, filter, page, unselect, sort: 'ctime' })
         //
         return {
            code: 0,
            status: StatusCode.SUCCESS,
            message: 'OK!',
            data: discounts,
         }
      } catch (error) {
         throw new Error(error)
      }
   }
}
//
export default new DiscountService()
