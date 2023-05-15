import { findCartId } from '../../models.mongo/repositories/cart.repo'
import { ProductType } from '../../models.mongo/interface.model'
import { BadRequestError } from '../../core/error.response'
import { checkProductByServer } from '../../models.mongo/repositories/product.repo'
import { StatusCode } from '../../utils/constant'
import discountUserService from './discount.service/discount.user.service'

//
interface CheckoutServiceType {
   userId: string
   cartId: string
   shop_order_ids: ShopOrderType[]
}
//
interface DiscountOrder {
   discountId: string
   code: string
}
//
interface ShopOrderType {
   shopId: string
   shop_discounts: DiscountOrder[]
   item_products: ProductType[]
}
//
class CheckoutService {
   public async CheckoutReview({ userId, cartId, shop_order_ids }: CheckoutServiceType) {
      // Check Cart Of User
      const foundCart = await findCartId(userId, cartId)
      if (!foundCart) throw new BadRequestError('Not Found Cart!')
      // Create Review Order Before Submit
      const shop_orders_ids_new: any[] = []
      //
      let reviewOrder = {
         totalOrder: 0,
         totalDiscount: 0,
         totalPrice: 0,
      }
      // Calculation Total Bill
      for (let i = 0; i < shop_order_ids.length; i++) {
         const { shopId, shop_discounts, item_products } = shop_order_ids[i]
         // Check Product Available
         const productServer: any[] = await checkProductByServer(item_products)
         //Check to see if any products are not accepted
         if (!productServer || productServer.includes(null)) throw new BadRequestError('Order Wrong!')
         //Calc Total Price (Not Includes Discount)
         const totalCheckout = productServer.reduce((acc, product) => acc + product.price * product.quantity, 0)
         // Check Amount And Calc Discount for Item Product
         if (shop_discounts.length > 0 && productServer) {
            //get amount discount
            for (let i = 0; i < shop_discounts.length; i++) {
               const { code, discountId } = shop_discounts[i]
               const { discount, totalDiscount } = await discountUserService.getDiscountAmountByUser({
                  code,
                  shopId,
                  userId,
                  discountId,
                  products: productServer,
               })
               //
               reviewOrder.totalOrder += totalCheckout
               reviewOrder.totalDiscount += totalDiscount
               reviewOrder.totalPrice += totalCheckout - totalDiscount
               //
               shop_orders_ids_new.push({
                  products: productServer,
                  totalCheckout,
                  discount,
                  totalDiscount,
                  totalPrice: totalCheckout - totalDiscount,
               })
            }
         }
         if (!shop_discounts.length) {
            //
            reviewOrder.totalOrder += totalCheckout
            reviewOrder.totalPrice += totalCheckout
            //
            shop_orders_ids_new.push({
               products: productServer,
               totalCheckout,
               discount: 0,
               totalDiscount: 0,
               totalPrice: totalCheckout,
            })
         }
      }
      return {
         code: 0,
         status: StatusCode.SUCCESS,
         shop_order_ids,
         shop_orders_ids_new,
         reviewOrder,
      }
   }
}
export default new CheckoutService()
