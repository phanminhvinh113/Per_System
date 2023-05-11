import express from 'express'
import { ApiKey, Permission } from '../../auth/checkAuth'
import { ROLES } from '../../utils/constant'
const route = express.Router()
//check API Key
route.use(ApiKey)
// //Check Permission
route.use(Permission(ROLES.USER))
//
route.use('/v1/api', require('./v1/index.v1.routes'))

export default route

//
