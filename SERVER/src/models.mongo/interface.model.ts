export interface ProductType {
   name: string
   type: string[] | string
   thumb: string
   description: string
   price: number
   quantity: number
   shop_id: object | string
   shop: string
   discount: number
   sold: number
   stock: number
   attributes: object
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
