import { Types } from 'mongoose'
import cartModel from '../cart.model'
import { CartProductType } from '../interface.model'

//
interface CartServiceType {
   userId: string
   product: CartProductType
}
//

export const findCartUserAndUpdate = async ({ userId, product }: CartServiceType) => {
   //
   const CartItem = await cartModel.findOne({ cart_userId: userId, cart_state: 'active', 'cart_products.product_id': product.product_id }).lean()
   //
   let result
   if (CartItem) {
      // incr quantity
      result = await cartModel.updateOne(
         {
            cart_userId: new Types.ObjectId(userId),
            cart_state: 'active',
            'cart_products.product_id': product.product_id,
         },
         {
            $inc: {
               'cart_products.$.quantity': product.quantity,
               cart_quantity: product.quantity,
            },
         },
         {
            new: true,
         }
      )
   }
   if (!CartItem) {
      // add product
      result = await cartModel.updateOne(
         {
            cart_userId: new Types.ObjectId(userId),
            cart_state: 'active',
         },
         {
            $inc: {
               cart_count_product: 1,
               cart_quantity: product.quantity,
            },
            $push: {
               cart_products: product,
            },
         },
         {
            new: true,
         }
      )
   }
   return result
}
export const findCartId = async (userId: string, cartId: string) => {
   return await cartModel.findOne({
      cart_userId: new Types.ObjectId(userId),
      _id: new Types.ObjectId(cartId),
      cart_state: 'active',
   })
}
