import Redis from 'ioredis'
import dotenv from 'dotenv'
dotenv.config()
//
const port: number = process.env?.PORT_REDIS_CLOUD ? +process.env.PORT_REDIS_CLOUD : 11579
//
const RedisClient = new Redis({
   host: process.env.HOST_REDIS_CLOUD,
   port,
   password: process.env.PASSWORD_REDIS_CLOUD,
})
export const ConnectRedis = () => {
   //
   RedisClient.on('ready', () => {
      console.log('Redis Ready!')
   })
   //
   RedisClient.on('error', (error) => {
      console.log('Connect Redis Filed, ERROR:::', error)
   })
}
//

export default RedisClient
