import Redis from 'ioredis'

const RedisClient = new Redis({
   host: 'localhost',
   port: 6379,
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
const setData = async () => {
   await RedisClient.set('userId', 123)
}

//
setData()
export default RedisClient
