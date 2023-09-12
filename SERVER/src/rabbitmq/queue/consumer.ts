import amqplib from 'amqplib'
require('dotenv').config()
//

// const ampq_url_cloud: string = process.env?.AMQP_URL_DOCKER?.toString() || ''
const ampq_url_docker: string = process.env?.AMQP_URL_DOCKER || 'amqp://guest:phanminhvinh2003@localhost'

//
export const receiveQueue = async () => {
   try {
      //1
      const connect = await amqplib.connect(ampq_url_docker)
      //2
      const chanel = await connect.createChannel()
      //3. create name queue
      const nameQueue: string = 'q_1'
      //
      await chanel.assertQueue(nameQueue, {
         durable: true,
      })
      //
      await chanel.consume(
         nameQueue,
         (msg) => {
            console.log('MSG:::', msg?.content.toString())
         },
         {
            noAck: true,
         }
      )
      //
   } catch (error) {
      console.log(error)
   }
}
receiveQueue()
