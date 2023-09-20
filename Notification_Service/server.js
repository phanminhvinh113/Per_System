"use strict";

//
const { consumerToQueue } = require("./src/service/consumer.service");
const queueName = "q_1";
//
consumerToQueue(queueName)
  .then(() => {
    console.log(`Message consumer started ${queueName}`);
  })
  .catch((error) => {
    console.error("Error", error);
  });
