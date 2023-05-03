import express from 'express'
import { asyncHandler } from '../../../helpers/asyncHandler'
import productController from '../../../restAPI/controllers/product.controller'
import { Authentication } from '../../../auth/auth.utils'

//
const route = express.Router()
//
route.get('/search', asyncHandler(productController.searchProduct))
route.get('/', asyncHandler(productController.findAllProducts))
//
route.use(Authentication)
route.post('/new_product', asyncHandler(productController.createProduct))
route.post('/publish', asyncHandler(productController.publicProductByShop))
// QUERY
route.get('/daft/all', asyncHandler(productController.getAllDaftForShop))
route.get('/published/all', asyncHandler(productController.getAllPublicForShop))

module.exports = route
