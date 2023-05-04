import mongoose, { Schema } from 'mongoose' // Erase if already required
import { DiscountType } from './interface.model'

// Declare the Schema of the Mongo model
const historyDiscountSchema = new mongoose.Schema<DiscountType>(
   {
      shop_id: { type: Schema.Types.ObjectId, ref: 'User', require: true },
      name: { type: String, required: true },
      description: { type: String, require: true },
      type: { type: String, require: true, default: 'fixed amount' },
      value: { type: Number, require: true },
      code: { type: String, require: true },
      start_date: { type: Date, require: true },
      end_date: { type: Date, require: true },
      max_quantity: { type: Number, require: true },
      amount_user_used: { type: Number, require: true, default: 0 },
      maximum_amount_per_user: { type: Number, require: true },
      user_used: { type: Array, default: [] },
      min_order_value: { type: Number, require: true },
      is_active: false,
      apply_to_products: { type: String, require: true, enum: ['all', 'specific'] },
      product_ids: { type: Array, default: [], require: true, ref: 'Product' },
   },
   {
      collection: 'History_Discount',
      timestamps: true,
   }
)

//Export the model
export const HistoryDiscountModel = mongoose.model<DiscountType>('Discount', historyDiscountSchema)
