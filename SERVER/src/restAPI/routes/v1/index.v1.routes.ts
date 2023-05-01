import express from 'express'
const route = express.Router()
//
route.use('/', require('./user.v1.routes'))
route.use('/product', require('./product.v1.routes'))
route.use('/admin', require('./admin.v1.routes'))
//
module.exports = route
