import { Schema, model, Document } from 'mongoose' // Erase if already required
import { Enum_Type_Products } from '../utils/constant'
import { ClothingType, ProductType, ElectronicType, FurnitureType } from './interface.model'

//
interface ProductDocument extends ProductType, Document {}
// Declare the Schema of the Mongo model
const productSchema = new Schema<ProductDocument>(
   {
      name: {
         type: String,
         required: true,
         index: true,
      },
      type: {
         type: String,
         required: true,
         enum: Enum_Type_Products,
      },
      thumb: {
         type: String,
         required: true,
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
      shop_id: {
         type: Schema.Types.ObjectId,
         require: true,
      },
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
      attributes: { type: Schema.Types.Mixed, require: true },
   },
   {
      collection: '_Product',
      timestamps: true,
   }
)
//

//
const clothingSchema = new Schema<ClothingType>(
   {
      brand: { type: String, require: true },
      size_chart: { type: Array, require: true },
      material: { type: String, require: true },
      shop_id: { type: Schema.Types.ObjectId, require: true, ref: 'User' },
   },
   {
      collection: '_Clothe',
      timestamps: true,
   }
)
const electronicSchema = new Schema<ElectronicType>(
   {
      manufactory: { type: String, require: true },
      size_chart: { type: Array, require: true },
      material: { type: String, require: true },
      shop_id: { type: Schema.Types.ObjectId, require: true, ref: 'User' },
   },
   {
      collection: '_Electronic',
      timestamps: true,
   }
)
const furnitureSchema = new Schema<FurnitureType>(
   {
      brand: { type: String, require: true },
      size_chart: { type: Array, require: true },
      material: { type: String, require: true },
      shop_id: { type: Schema.Types.ObjectId, require: true, ref: 'User' },
   },
   {
      collection: '_Furniture',
      timestamps: true,
   }
)
//Export the model
export const ProductModel = model<ProductType>('Product', productSchema)
export const ClothingModel = model<ClothingType>('Clothing', clothingSchema)
export const ElectronicModel = model<ElectronicType>('Electronic', electronicSchema)
export const FurnitureModel = model<FurnitureType>('Furniture', furnitureSchema)
