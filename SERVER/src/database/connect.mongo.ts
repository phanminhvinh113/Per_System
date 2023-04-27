import { connect } from "mongoose";
require("dotenv").config();
//
const URL_MONGGO_DATABASE: string = process.env.URL_MONGO_DATABASE || "";
// CONNECT INSTANCE MONGODB
class DataBase {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await connect(URL_MONGGO_DATABASE, {
        maxPoolSize: 100,
      });
      console.log("ConnectDB_Mongo Success!");
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }
  //
  static instance: any;
  //
  static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }
}
const instanceMongoDB = DataBase.getInstance();
//
export default instanceMongoDB;
