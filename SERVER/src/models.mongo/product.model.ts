import { Schema, model } from 'mongoose' // Erase if already required
import { Type_Products } from '../utils/constant'
interface ProductType {
   name: string
   type: string[] | string
   thumb: string
   description: string
   price: number
   quantity: number
   shop: string
   discount: number
   sold: number
   stock: number
   atrtibutes: object
}
interface ClothingType {
   brand: string
   size_chart: object | string[] | number[]
   material: string
}
//
// Declare the Schema of the Mongo model
const productSchema = new Schema<ProductType>(
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

const clothingSchema = new Schema<ClothingType>(
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
module.exports = {
   ProductModel: model<ProductType>('Product', productSchema),
   clothingModel: model<ClothingType>('Clothing', clothingSchema),
}
