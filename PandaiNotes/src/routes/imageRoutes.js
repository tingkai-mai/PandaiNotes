const express = require("express");
const imageController = require("./../controllers/imageController");

const imageRouter = express.Router();

imageRouter.get("/getAllImages", imageController.getAllImages);

imageRouter.get("/getImage", imageController.getImage);

imageRouter.post("/pushImage", imageController.pushImage);

imageRouter.patch("/updateImage", imageController.updateImage);

module.exports = imageRouter;
