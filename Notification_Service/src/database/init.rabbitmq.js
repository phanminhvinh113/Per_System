"use strict";
//
const amqplib = require("amqplib");
require("dotenv").config();
//
const URL_CONNECT_RABBITMQ =
  process.env?.API_RABBITMQ_LOCAL.toString() ||
  "amqp://guest:phanminhvinh2003@localhost"; 
//
const connectRabbitMQ = async () => {
  try {
    //
    const connection = await amqplib.connect(URL_CONNECT_RABBITMQ);
    if (!connection) throw new Error();
    //
    const channel = await connection.createChannel();
    //
    return { channel, connection };
  } catch (error) {
    throw error;
  }
};
//
const connectMQForTest = async (message) => {
  try {
    const { channel, connection } = await connectRabbitMQ();
    const queue = "queue_test";

    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(message));
    //
    connection.close();
  } catch (error) {
    console.error(error);
  }
};
//
const consumerQueue = async (channel, queueName) => {
  try {
    await channel.assertQueue(queueName, { durable: true });
    console.log("Waiting for Message ...");
    //
    channel.consume(
      queueName,
      (message) => {
        console.log(`Receive Message at ${queueName}: ${message.content}`);
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
//
module.exports = {
  consumerQueue,
  connectMQForTest,
  connectRabbitMQ,
};
