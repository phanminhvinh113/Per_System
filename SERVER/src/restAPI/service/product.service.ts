import { ProductType } from '../../models.mongo/interface.model'
import { ProductModel, ClothingModel, ElectronicModel, FurnitureModel } from '../../models.mongo/product.model'
import { BadRequestError } from '../../core/error.response'
import { TypeProduct } from '../../utils/constant'
type productRegistryType = { [key: string]: any }
// PRODUCT FACTORY
class ProductFactory {
   //
   static productRegistry: productRegistryType = {}
   //
   static registerProductType(type: string, classRef: any) {
      ProductFactory.productRegistry[type] = classRef
   }

   //
   async createProduct(type: string, payload: any) {
      //
      if (!type || !payload) throw new BadRequestError('Missing Parameters')
      //
      const productClass: any = ProductFactory.productRegistry[type]
      if (!productClass) throw new BadRequestError('Error Type')
      return new productClass(payload).createProduct()
   }
}

class Product {
   name: string
   type: string[] | string
   thumb: string
   description: string
   price: number
   quantity: number
   shop: string
   shop_id: string | number | object
   discount: number
   sold: number
   stock: number
   attributes: object
   constructor({ name, type, thumb, description, price, quantity, shop, discount, sold, stock, attributes, shop_id }: ProductType) {
      this.name = name
      this.type = type
      this.thumb = thumb
      this.description = description
      this.price = price
      this.quantity = quantity
      this.shop = shop
      this.shop_id = shop_id
      this.discount = discount
      this.sold = sold
      this.stock = stock
      this.attributes = attributes
   }
   // Create New Product
   async createProduct() {
      return await ProductModel.create(this)
   }
}

class Clothing extends Product {
   async createProduct() {
      if (!this.attributes) throw new BadRequestError('Missing Attributes')
      const newProduct = await super.createProduct()
      console.log(newProduct)
      if (!newProduct) throw new BadRequestError('Failed Create  Product!')
      //
      const newClothing = await ClothingModel.create({
         ...this.attributes,
         _id: newProduct._id,
         shop_id: this.shop_id,
      })
      if (!newClothing) throw new BadRequestError('Failed Create Clothing Product!')
      //
      return newProduct
   }
}
class Electronic extends Product {
   async createProduct() {
      if (!this.attributes) throw new BadRequestError('Missing Attributes')
      const newProduct = await super.createProduct()
      console.log(newProduct)
      if (!newProduct) throw new BadRequestError('Failed Create  Product!')
      //
      const newElectronic = await ElectronicModel.create({
         ...this.attributes,
         _id: newProduct._id,
         shop_id: this.shop_id,
      })
      if (!newElectronic) throw new BadRequestError('Failed Create Electronic Product!')
      //
      return newProduct
   }
}
class Furniture extends Product {
   async createProduct() {
      if (!this.attributes) throw new BadRequestError('Missing Attributes')
      const newProduct = await super.createProduct()
      console.log(newProduct)
      if (!newProduct) throw new BadRequestError('Failed Create  Product!')
      //
      const newFurniture = await FurnitureModel.create({
         ...this.attributes,
         _id: newProduct._id,
         shop_id: this.shop_id,
      })
      if (!newFurniture) throw new BadRequestError('Failed Create Furniture Product!')
      //
      return newProduct
   }
}
//
ProductFactory.registerProductType(TypeProduct.Electronic, Electronic)
ProductFactory.registerProductType(TypeProduct.Clothing, Clothing)
ProductFactory.registerProductType(TypeProduct.Furniture, Furniture)

export default new ProductFactory()
