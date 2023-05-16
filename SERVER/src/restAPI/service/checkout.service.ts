import { findCartId, removeProductsInCart } from '../../models.mongo/repositories/cart.repo'
import { BadRequestError, ConflictRequestError } from '../../core/error.response'
import { checkProductByServer } from '../../models.mongo/repositories/product.repo'
import { StatusCode } from '../../utils/constant'
import discountUserService from './discount.service/discount.user.service'
import { CheckoutServiceType, OrderByUserType, ProductServeType } from '../interface/checkout.interface'
import { acquireLock } from './redis.service'
import orderModel from '../../models.mongo/order.model'

//
class CheckoutService {
   //
   public async CheckoutReview({ userId, cartId, shop_order_ids }: CheckoutServiceType) {
      // Check Cart Of User
      const foundCart = await findCartId(userId, cartId)
      if (!foundCart) throw new BadRequestError('Not Found Cart!')
      // Create Review Order Before Submit
      const shop_orders_ids_new: any[] = []
      //
      let checkoutOrder = {
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
               const { discount, totalDiscount, totalPrice } = await discountUserService.getDiscountAmountByUser({
                  code,
                  shopId,
                  userId,
                  discountId,
                  products: productServer,
               })
               //
               checkoutOrder.totalOrder += totalCheckout
               checkoutOrder.totalDiscount += totalDiscount
               checkoutOrder.totalPrice += totalPrice
               //
               shop_orders_ids_new.push({
                  products: productServer,
                  totalCheckout,
                  discount,
                  totalDiscount,
                  totalPrice,
               })
            }
         }
         if (!shop_discounts.length) {
            //
            checkoutOrder.totalOrder += totalCheckout
            checkoutOrder.totalPrice += totalCheckout
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
         checkoutOrder,
      }
   }
   public async OrderByUser({ shop_order_ids, cartId, userId, userAddress = {}, userPayment = {} }: OrderByUserType) {
      //
      const { shop_orders_ids_new, checkoutOrder } = await this.CheckoutReview({ userId, cartId, shop_order_ids })
      //
      // Check Again , Check to see if the product is still in stock!!!
      const products: ProductServeType[] = shop_orders_ids_new.flatMap((order) => order.item_products)
      console.log('PRODUCT::::', products)
      //
      const acquireProduct: Boolean[] = []
      //
      if (!products || !products.length) throw new ConflictRequestError('Order Error!')
      //
      for (let i = 0; i < products.length; i++) {
         const { productId, quantity } = products[i]
         //
         const keyLock = await acquireLock(productId, quantity, cartId)
         acquireProduct.push(keyLock ? true : false)
      }
      //If there exists an out-of-stock product
      if (acquireProduct.includes(false)) throw new BadRequestError('Some Products Updated!, Please Back To Cart')
      //Add Into Order
      const new_order = await orderModel.create({
         order_userId: userId,
         order_checkout: checkoutOrder,
         order_payment: userPayment,
         order_shipping: userAddress,
         order_products: products,
         order_status: 'pending',
      })
      //
      if (!new_order) throw new ConflictRequestError('Error Order! Check Again!')
      // Remove Product In Carts

      const productIds: any[] = products.flatMap((product) => product.productId)
      //
      console.log('product ids :::', productIds)
      const remove_products = await removeProductsInCart({ userId, cartId, productIds })

      if (!remove_products.modifiedCount || !remove_products) throw new ConflictRequestError('Cannot Order, Please Try Again!')
      //
      return {
         code: 0,
         status: StatusCode.SUCCESS,
         data: shop_orders_ids_new,
      }
   }
   // USER //
   public async getOrderByUser() {}
   // USER //

   public async getOneOrderByUser() {}
   // USER //

   public async cancelOrderByUser() {}
   // SHOP  || ADMIN //
   public async updateOrderStatusByShop() {}
}
export default new CheckoutService()
