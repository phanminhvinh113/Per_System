"use strict";
//
const { consumerQueue, connectRabbitMQ } = require("../database/init.rabbitmq");
//
const consumerToQueue = async (queueName) => {
  try {
    //
    const { channel } = await connectRabbitMQ();
    //
    await consumerQueue(channel, queueName);
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

module.exports = {
  consumerToQueue,
};
