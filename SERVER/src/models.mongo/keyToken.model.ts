import mongoose, { Schema } from 'mongoose' // Erase if already required
//
interface KeyTokensType {
   user: object | string
   publicKey: string
   refreshToken: object
}
// Declare the Schema of the Mongo model
const KeyTokensSchema = new mongoose.Schema<KeyTokensType>(
   {
      user: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
      publicKey: {
         type: String,
         required: true,
         unique: true,
      },
      refreshToken: {
         type: Array,
         default: [],
      },
   },
   {
      collection: '_KeyTokens',
      timestamps: true,
   }
)

//Export the model
const keyTokenModel = mongoose.model<KeyTokensType>('KeyTokensModel', KeyTokensSchema)
export default keyTokenModel
