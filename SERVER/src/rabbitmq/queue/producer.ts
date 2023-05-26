import amqplib from 'amqplib'
require('dotenv').config()
//
const ampq_url_docker: string = process.env?.AMQP_URL_DOCKER || ''
//
export const sendQueue = async ({ msg }: { msg: string }) => {
   try {
      //1
      const connect = await amqplib.connect(ampq_url_docker)
      //2
      const chanel = await connect.createChannel()
      //3. create name queue
      const nameQueue: string = 'q_1'
      //
      await chanel.assertQueue(nameQueue, {
         durable: false,
      })
      //
      await chanel.sendToQueue(nameQueue, Buffer.from(msg))
      //
   } catch (error) {
      console.log(error)
   }
}
//
void sendQueue({ msg: 'h_123@' })
