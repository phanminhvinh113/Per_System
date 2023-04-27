import { UserModel } from '../../models.mongo/User.model'
//
export const deleteUser = async (_: any, { _id }: { _id: string }) => {
   try {
      const result = await UserModel.findByIdAndDelete({ _id })
      return result
   } catch (error) {
      return error
   }
}
