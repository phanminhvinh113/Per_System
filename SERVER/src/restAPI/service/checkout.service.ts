import { findCartId } from '../../models.mongo/repositories/cart.repo'
import { DiscountType, ProductType } from '../../models.mongo/interface.model'
import { BadRequestError } from '../../core/error.response'
import { checkProductByServer } from '../../models.mongo/repositories/product.repo'
//
interface CheckoutServiceType {
   userId: string
   cartId: string
   shop_order_ids: ShopOrderType[]
}
//
interface ShopOrderType {
   shopId: string
   shop_discounts: DiscountType[]
   item_products: ProductType[]
}
//
class CheckoutService {
   public static async CheckoutReview({ userId, cartId, shop_order_ids }: CheckoutServiceType) {
      // Check Cart Of User
      const foundCart = await findCartId(userId, cartId)
      if (!foundCart) throw new BadRequestError('Not Found Cart!')
      //
      const checkout_order = {
         totalPrice: 0,
         feeShip: 0,
         totalDiscount: 0,
         totalCheckout: 0,
      }
      // Create Review Order Before Submit
      const shop_orders_ids_new: ShopOrderType[] = []

      // Count Total Bill
      for (let i = 0; i < shop_order_ids.length; i++) {
         const { shopId, shop_discounts, item_products } = shop_order_ids[i]
         // Check Product Available
         const checkProductServer = await checkProductByServer(item_products)
         console.log('Checkout Product Service::::', checkProductServer)
         //
         if (!checkProductServer[0]) throw new BadRequestError('Order Wrong!')
         //total price product order
         const checkoutPrice = checkProductServer.reduce(
            (acc, product) => (product?.quantity || product?.price ? acc + product?.quantity * product?.price : acc),
            0
         )
         //total price before handle
         checkout_order.totalPrice += checkoutPrice
         //
         const itemCheckout = {
            shopId,
            shop_discounts,
            priceRaw: checkoutPrice,
            priceApplyDiscount: checkoutPrice,
            item_products: checkProductServer,
         }
         console.log(itemCheckout)
         // Check Amount And Calc Discount for Item Product
         if (shop_discounts.length > 0) {
            //get amount discount
         }
      }
      return {
         shop_order_ids,
         shop_orders_ids_new,
      }
   }
}
export default new CheckoutService()
