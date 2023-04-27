import keyTokenModel from '../../models.mongo/keyToken.model'
interface createKeyTokenType {
   userId: string | object
   publicKey: string
}
class KeyTokenService {
   createKeyToken = async ({ userId, publicKey }: createKeyTokenType) => {
      try {
         const tokens = await keyTokenModel.create({
            user: userId,
            publicKey,
         })
         return tokens ? tokens : null
      } catch (error) {
         return error
      }
   }
}
export default new KeyTokenService()
