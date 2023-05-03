export interface ProductType {
   name: string
   type: string[] | string
   thumb: string
   description: string
   isDaft: boolean
   isPublic: boolean
   price: number
   quantity: number
   shop_id: object | string
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
   shop_id: object | string
}
export interface ElectronicType {
   manufactory: string
   size_chart: object | string[] | number[]
   material: string
   shop_id: string | object
}
export interface FurnitureType {
   brand: string
   size_chart: object | string[] | number[]
   material: string
   shop_id: string | object
}
export interface DiscountType {
   shop_id?: string
   name?: string
   description?: string
   type: string
   value: string
   code: string
   start_date: any
   end_date: any
   max_quantity: number
   amount_user_used: number
   maximum_amount_per_user: number
   user_used?: string[] | number[] | object
   min_order_value: number
   is_active?: boolean
   apply_to_products: string[] | object | string
   product_ids: string[] | number[] | object
}
