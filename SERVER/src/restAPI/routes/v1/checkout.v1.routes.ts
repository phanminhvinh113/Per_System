import express from 'express'
import { asyncHandler } from '../../../helpers/asyncHandler'
import checkoutController from '../../controllers/checkout.controller'
import { Authentication } from '../../../auth/auth.utils'

//
const route = express.Router()
//
route.use('/', Authentication)
route.post('/review', asyncHandler(checkoutController.checkoutReview))
route.post('/order', asyncHandler(checkoutController.orderProductByUser))
//
module.exports = route
