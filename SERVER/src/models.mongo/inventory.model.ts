import mongoose, { Types } from 'mongoose'
// Declare the Schema of the Mongo model
interface inventoryType {
   inv_productId: string | object
   inv_stock: number
   inv_location: string
   inv_shopId: string | object
}
const inventorySchema = new mongoose.Schema<inventoryType>(
   {
      inv_productId: { type: Types.ObjectId, ref: 'Product' },
      inv_stock: { type: Number, require: true },
      inv_location: { type: String },
      inv_shopId: { type: Types.ObjectId, ref: 'User' },
   },
   {
      collection: '_Inventory',
      timestamps: true,
   }
)

//Export the model
export const inventoryModel = mongoose.model<inventoryType>('Inventory', inventorySchema)
