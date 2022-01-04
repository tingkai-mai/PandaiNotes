const express = require("express");
const moduleController = require("./../controllers/moduleController");

const moduleRouter = express.Router();

moduleRouter.get("/getAllModules", moduleController.getAllModules);

moduleRouter.get("/getModule/:moduleId", moduleController.getModule);

moduleRouter.post("/pushModule", moduleController.createModule);

moduleRouter.patch("/updateModule/:moduleId", moduleController.updateModule);

module.exports = moduleRouter;
