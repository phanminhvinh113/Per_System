import { Types } from 'mongoose'

export interface ProductType {
   productId: string | Types.ObjectId
   name: string
   type: string[] | string
   thumb: string
   description: string
   isDaft: boolean
   isPublic: boolean
   price: number
   quantity: number
   shop_id: Types.ObjectId | string
   shop: string
   discount: number
   sold: number
   stock: number
   attributes: object
   product_rating: object | number
   product_variations: object
   product_slug: string | null
}
export interface ClothingType {
   brand: string
   size_chart: object | string[] | number[]
   material: string
   shop_id: Types.ObjectId | string
}
export interface ElectronicType {
   manufactory: string
   size_chart: object | string[] | number[]
   material: string
   shop_id: string | Types.ObjectId
}
export interface FurnitureType {
   brand: string
   size_chart: object | string[] | number[]
   material: string
   shop_id: string | Types.ObjectId
}
export interface DiscountUserUsed {
   user_id: Types.ObjectId | string
   amount: number
}
export interface DiscountType {
   _id: Types.ObjectId | string
   code_id: Types.ObjectId | string
   shop_id: string | Types.ObjectId
   name: string
   description: string
   type: string
   value: string | number
   code: string
   start_date: any
   end_date: any
   max_quantity: number
   amount_user_used: number
   maximum_amount_per_user: number
   user_used: DiscountUserUsed[] | object
   min_order_value: number
   is_active: boolean
   apply_to_products: string[] | object | string
   product_ids: string[] | object
}
export interface CartProductType {
   product_id: Types.ObjectId | string
   shop_id?: Types.ObjectId | string
   quantity: number
   old_quantity?: number
   name?: string
   description?: string
   type?: string
   thumb?: string
   price?: number
   discount?: number
   type_commodity?: object
}
export interface CartType {
   cart_state: string
   cart_products: CartProductType[]
   cart_quantity: number
   cart_count_product: number
   cart_userId: object | string
}
