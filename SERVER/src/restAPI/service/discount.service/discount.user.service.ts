import { discountModel } from '../../../models.mongo/discount.model'
import { BadRequestError, ConflictRequestError, ForbiddenError, NotFoundError } from '../../../core/error.response'
import { DiscountType, DiscountUserUsed, ProductType } from '../../../models.mongo/interface.model'
import { StatusCode } from '../../../utils/constant'
import { checkDiscountExist } from '../../../models.mongo/repositories/discount.repo'

//
interface DiscountServiceType {
   code: string
   shopId: string
   products: ProductType[]
   page: number
   limit: number
   userId: string
   discount_id: string
   _id: string
}
//
class DiscountUserService {
   async getDiscountAmountByUser({ code, shopId, userId, products, discount_id }: DiscountServiceType) {
      const foundDiscount: DiscountType | null = await checkDiscountExist({ code, shop_id: shopId, discount_id })
      if (!foundDiscount) throw new NotFoundError('Not Found Discount!')
      //
      const { is_active, max_quantity, start_date, end_date, min_order_value, maximum_amount_per_user, user_used, type, value, amount_user_used } =
         foundDiscount
      //
      if (!is_active) throw new NotFoundError('Discount Expired!')
      if (max_quantity && amount_user_used > max_quantity) throw new NotFoundError('Discount are out!')
      if (new Date() < new Date(start_date) || new Date() > new Date(end_date)) throw new NotFoundError('Discount Expired!')
      //
      let totalOrder: number = 0
      if (min_order_value > 0 && products) {
         totalOrder = products?.reduce((acc, product) => acc + product.price * product.quantity, 0)
         if (totalOrder < min_order_value) throw new BadRequestError(`Discount require a minimum  value of  ${min_order_value}`)
      }
      //
      const userUsesDiscount: DiscountUserUsed | null | undefined = Array.isArray(user_used)
         ? user_used?.find((user: DiscountUserUsed) => userId === user.user_id)
         : null
      if (userUsesDiscount && userUsesDiscount?.amount > maximum_amount_per_user) throw new ForbiddenError('Exceed the amount allowed for use')
      if (userUsesDiscount && userUsesDiscount.amount < max_quantity) {
         await discountModel.updateOne(
            { _id: discount_id, code, shop_id: shopId, user_used: { $eleMatch: { user_id: userId } } },
            { $inc: { 'user_used.$.amount': 1 } },
            function (err: any) {
               throw new ConflictRequestError(`${err}`)
            }
         )
         const result = await discountModel.findByIdAndUpdate(foundDiscount._id, {
            $inc: {
               amount_user_used: 1,
               max_quantity: -1,
            },
            function(err: any) {
               throw new ConflictRequestError(`${err}`)
            },
         })
         if (!result) throw new BadRequestError('Something Wrong! Try again')
      }
      if (!userUsesDiscount) {
         const result = await discountModel.findByIdAndUpdate(foundDiscount._id, {
            $push: {
               user_used: { user_id: userId, amount: 1 },
            },
            $inc: {
               amount_user_used: 1,
               max_quantity: -1,
               'user_used.$.amount': 1,
            },
         })
         if (!result) throw new BadRequestError('Something Wrong! Try again')
      }
      //
      const amount_money_discount: number = type === 'fix amounted' ? +value : totalOrder * (+value / 100)
      //
      return {
         code: 0,
         status: StatusCode.SUCCESS,
         totalOrder,
         discount: amount_money_discount,
         totalPrice: totalOrder - amount_money_discount > 0 ? totalOrder - amount_money_discount : 0,
      }
      //
   }
   // CANCEL
   async cancelDiscountCode({ code, shopId, discount_id, userId }: DiscountServiceType) {
      const foundDiscount = await checkDiscountExist({ code, shop_id: shopId, discount_id })
      if (!foundDiscount) throw new NotFoundError('Not Found Discount!')
      const result = await discountModel.findByIdAndUpdate(foundDiscount._id, {
         $push: {
            user_used: userId,
         },
         $inc: {
            amount_user_used: -1,
            max_quantity: 1,
         },
      })
      if (!result) throw new ConflictRequestError('Something Wrong! Try Again')
      return {
         code: 0,
         status: StatusCode.SUCCESS,
         message: 'Cancel Success!',
      }
   }
}
//
export default new DiscountUserService()
