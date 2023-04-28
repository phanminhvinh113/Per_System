import mongoose, { Schema } from 'mongoose' // Erase if already required
import { Type_Products } from '../utils/constant'

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         index: true,
      },
      type: {
         type: String,
         required: true,
         enum: Type_Products,
      },
      thumb: {
         type: String,
         required: true,
         unique: true,
      },
      description: String,
      price: {
         type: Number,
         require: true,
      },
      quantity: {
         type: Number,
         require: true,
      },
      shop: String,
      discount: Number,
      sold: {
         type: Number,
         require: true,
         default: 0,
      },
      stock: {
         type: Number,
         require: true,
         default: 0,
      },
      atrtibutes: { type: Schema.Types.Mixed, require: true },
   },
   {
      collection: '_Product',
      timestamps: true,
   }
)

const clothingSchema = new Schema(
   {
      brand: { type: String, require: true },
      size_chart: { type: Array, require: true },
      material: { type: String, require: true },
   },
   {
      collection: '_Clothes',
      timestamps: true,
   }
)

//Export the model
export default mongoose.model('Product', productSchema)
export mongoose.model('Clothes',clothingSchema)
