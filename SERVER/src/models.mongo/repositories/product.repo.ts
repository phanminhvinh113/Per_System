import { Types } from 'mongoose'
import { ProductModel } from '../product.model'
import { BadRequestError, NotFoundError } from '../../core/error.response'
import { StatusCode } from '../../utils/constant'
import { getSelectData } from '../../utils/index.utils'

//
const queryProduct = async (query: object, skip: number, limit: number) => {
   return await ProductModel.find(query).populate('shop_id', 'name email _id').sort({ updatedAt: -1 }).skip(skip).limit(limit).lean().exec()
}
//
export const findAllDaftForShop = async ({ query, skip, limit }: { query: object; skip: number; limit: number }) => {
   return await queryProduct(query, skip, limit)
}
export const findAllPublicForShop = async ({ query, skip, limit }: { query: object; skip: number; limit: number }) => {
   return await queryProduct(query, skip, limit)
}
//
export const publicProductByShop = async (shop_id: string, product_id: string) => {
   if (!shop_id || !product_id) throw new BadRequestError('Missing parameter')
   //
   const foundShop = await ProductModel.findOne({
      shop_id: new Types.ObjectId(shop_id),
      _id: product_id,
   })
   //
   if (!foundShop) throw new NotFoundError('Not Found!')
   foundShop.isDaft = false
   foundShop.isPublic = true
   const { modifiedCount } = await foundShop.updateOne(foundShop)
   return modifiedCount
      ? {
           code: 0,
           status: StatusCode.SUCCESS,
           message: 'OK!',
        }
      : {
           code: -1,
           status: StatusCode.FORBIDDEN,
           message: 'FAILED!',
        }
}
export const findAllProduct = async ({ limit, sort, filter, page, select }: any) => {
   const skip: number = (page - 1) * limit
   const sortBy: any = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
   const products = await ProductModel.find(filter).skip(skip).sort(sortBy).limit(limit).select(getSelectData(select)).lean()
   //
   return {
      code: 0,
      status: StatusCode.SUCCESS,
      message: 'OK',
      data: products ? products : [],
   }
}
