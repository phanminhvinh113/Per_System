import express from 'express'
import { Authentication } from '../../../auth/auth.ultils'
const route = express.Router()
//
route.use(Authentication)
//
route.get('/get-all-user', (_req: any, res: any) => {
   res.status(200).json({
      code: 0,
      data: [],
   })
})

//
module.exports = route
