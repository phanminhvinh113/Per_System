"use strict";
const mongoose = require("mongoose");
const url_connect_mongo = "mongodb://0.0.0.0:27017/Notification_Ecommerce";
//
const testSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model("Test", testSchema);
//
describe("Mongo Connect", () => {
  let connection;
  //
  beforeAll(async () => {
    connection = await mongoose.connect(url_connect_mongo, {
      maxPoolSize: 10,
    });
  });
  //
  afterAll(async () => {
    await connection.disconnect();
  });
  //
  it("Should Connect to Mongo", () => {
    expect(mongoose.connection.readyState).toBe(1);
  });
  //
  it("Should Save Document", async () => {
    const user = new Test({ name: "Per" });
    await user.save();
    //
    expect(user.isNew).toBe(false);
  });
  //
  it("Should Find User", async () => {
    const user = await Test.findOne({ name: "Per" });
    expect(user).toBeDefined();
    expect(user.name).toBe("Per");
  });
});
