import express from 'express'
import { ApiKey, Permission } from '../../auth/checkAuth'
import { ROLES } from '../../utils/constant'
const route = express.Router()
//check API Key
route.use(ApiKey)
// //Check Permission
route.use(Permission(ROLES.USER))
//

route.use('/v1/api/product', require('./v1/product.v1.routes'))
route.use('/v1/api/discount', require('./v1/discount.v1.routes'))
route.use('/v1/api/cart', require('./v1/cart.v1.routes'))
route.use('/v1/api/order', require('./v1/order.v1.routes'))
//
route.use('/v1/api/admin', require('./v1/admin.v1.routes'))
route.use('/v1/api', require('./v1/user.v1.routes'))
//

export default route

//
