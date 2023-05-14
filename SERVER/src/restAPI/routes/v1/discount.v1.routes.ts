import express from 'express'
const route = express.Router()
import discountShopController from '../../controllers/discount.controller/discount.shop.controller'
import { asyncHandler } from '../../../helpers/asyncHandler'
//
route.post('/create', asyncHandler(discountShopController.createNewDiscount))
//
module.exports = route
