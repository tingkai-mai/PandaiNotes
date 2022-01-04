const express = require("express");
const imageController = require("./../controllers/imageController");

const imageRouter = express.Router();

imageRouter.get("/getAllImages", imageController.getAllImages);

imageRouter.get("/getImage/:imageId", imageController.getImage);

imageRouter.post("/pushImage", imageController.createImage);

imageRouter.patch("/updateImage/:imageId", imageController.updateImage);

module.exports = imageRouter;
