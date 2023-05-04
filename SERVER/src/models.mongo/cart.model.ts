import mongoose, { Schema } from 'mongoose' // Erase if already required
import { CartType, CartProductType } from './interface.model'
//
const cartProductsSchema = new Schema<CartProductType>({
   product_id: { type: Schema.Types.ObjectId, require: true },
   shop_id: { type: Schema.Types.ObjectId, require: true },
   quantity: { type: Number, default: 0 },
})
// Declare the Schema of the Mongo model
const cartSchema = new mongoose.Schema<CartType>(
   {
      cart_state: {
         type: String,
         enum: ['active', 'completed', 'failed', 'pending'],
         default: 'active',
      },
      cart_products: {
         type: [cartProductsSchema],
         default: [],
      },

      cart_quantity: {
         type: Number,
         required: true,
      },
      cart_count_product: {
         type: Number,
         required: true,
         default: 0,
      },
      cart_userId: {
         type: Schema.Types.ObjectId,
         require: true,
      },
   },
   {
      collection: '_Cart',
      timestamps: {
         createdAt: 'createdOn',
         updatedAt: 'modifiedOn',
      },
   }
)

//Export the model
export default mongoose.model<CartType>('Cart', cartSchema)
