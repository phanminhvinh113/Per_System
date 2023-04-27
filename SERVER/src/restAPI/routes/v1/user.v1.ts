import express from "express";
const route = express.Router();
import accessController from "../../controllers/access.controller";
//
route.post("/register", accessController.register);

//
module.exports = route;
