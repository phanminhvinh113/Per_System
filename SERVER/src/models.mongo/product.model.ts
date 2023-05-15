import { Schema, model, Document } from 'mongoose' // Erase if already required
import slugify from 'slugify'
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
         default: 0,
      },
      shop: String,
      shop_id: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         require: true,
      },
      discount: {
         type: Number,
         default: 0,
      },
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
      product_rating: {
         rating_average: {
            type: Number,
            default: 0,
         },

         rating_1_star: {
            type: Number,
            default: 0,
         },
         rating_2_star: {
            type: Number,
            default: 0,
         },
         rating_3_star: {
            type: Number,
            default: 0,
         },
         rating_4_star: {
            type: Number,
            default: 0,
         },
         rating_5_star: {
            type: Number,
            default: 0,
         },
      },
      product_variations: { type: Array, default: [] },
      isDaft: {
         type: Boolean,
         default: true,
         index: true,
         select: false,
         required: true,
      },
      isPublic: {
         type: Boolean,
         default: false,
         index: true,
         select: false,
         required: true,
      },
      product_slug: String,
   },
   {
      collection: '_Product',
      timestamps: true,
   }
)
// CREATE INDEX ON PRODUCT
productSchema.index({ name: 'text', description: 'text' })
//
productSchema.pre('save', function (next) {
   this.product_slug = slugify(this.name, { lower: true })
   next()
})
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
