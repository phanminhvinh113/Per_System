import { Types } from 'mongoose'
import { reservationInventory } from '../../models.mongo/repositories/inventory.repo'
import redisClient from '../connections/init.redis'
import { promisify } from 'util'

const pExpire = promisify(redisClient.pExpire).bind(redisClient)
const setnxAsync = promisify(redisClient.setNX).bind(redisClient)
const deleteAsyncKey = promisify(redisClient.del).bind(redisClient)
//
export const acquireLock = async (productId: string | Types.ObjectId, quantity: number, cartId: string) => {
   const key = `lock_${productId}`
   const retryTime: number = 10
   const expireTime: number = 3000
   for (let i = 0; i < retryTime; i++) {
      const result = await setnxAsync(key, expireTime)
      console.log('result::::', result)
      //
      if (!result) {
         await new Promise((resolve) => setTimeout(resolve, 50))
      }
      //
      const isReservation = await reservationInventory({ productId, quantity, cartId })
      //
      if (isReservation.modifiedCount) {
         await pExpire(key, expireTime)
         return key
      } else {
         return null
      }
   }
   return
}

export const releaseLock = async (keyLock: string) => {
   return await deleteAsyncKey(keyLock)
}
