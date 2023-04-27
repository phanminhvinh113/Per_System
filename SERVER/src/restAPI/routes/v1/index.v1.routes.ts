import express from 'express'
const route = express.Router()
//

route.use('/admin', require('./admin.v1'))
route.use('/', require('./user.v1'))
//
module.exports = route
