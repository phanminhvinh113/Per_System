"use strict";
//
const { connectMQForTest } = require("../database/init.rabbitmq");
//
describe("Rabbit MQ Connection", () => {
  it("should connect to message queue", async () => {
    const result = await connectMQForTest("test message");
    expect(result).toBeDefined();
  });
});
