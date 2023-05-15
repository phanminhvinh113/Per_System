import express from 'express'
import { asyncHandler } from '../../../helpers/asyncHandler'
import productController from '../../../restAPI/controllers/product.controller'
import { Authentication, AuthenticationSeller } from '../../../auth/auth.utils'

//
const route = express.Router()
//
route.get('/search', asyncHandler(productController.searchProduct))
route.get('/all', asyncHandler(productController.findAllProducts))
//
route.use('/shop', AuthenticationSeller)
route.post('/shop/new_product', asyncHandler(productController.createProduct))
route.use('/', Authentication)
route.post('/publish', asyncHandler(productController.publicProductByShop))
// QUERY
route.get('/daft/all', asyncHandler(productController.getAllDaftForShop))
route.get('/published/all', asyncHandler(productController.getAllPublicForShop))

module.exports = route
