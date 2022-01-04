const express = require("express");
const catController = require("./../controllers/todoCategoryController");

const catRouter = express.Router();

catRouter.get("/getAllCats", catController.getAllCats);

catRouter.get("/getCat/:catId", catController.getCat);

catRouter.post("/pushCat", catController.createCat);

catRouter.patch("/updateCat/:catId", catController.updateCat);

module.exports = catRouter;
