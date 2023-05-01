import express from 'express'
import { asyncHandler } from '../../../helpers/asyncHandler'
import productController from '../../../restAPI/controllers/product.controller'
import { Authentication } from '../../../auth/auth.ultils'

//
const route = express.Router()
//
route.use(Authentication)
route.post('/new_product', asyncHandler(productController.createProduct))

module.exports = route
