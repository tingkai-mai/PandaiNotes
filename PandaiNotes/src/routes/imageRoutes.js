const express = require("express");
const imageController = require("./../controllers/imageController");

const imageRouter = express.Router();

imageRouter.get("/getAllImages", imageController.getAllImages);

imageRouter.get("/getImage/:imageName", imageController.getImage);

imageRouter.post("/pushImage", imageController.createImage);

imageRouter.patch("/updateImage/:imageName", imageController.updateImage);

module.exports = imageRouter;
