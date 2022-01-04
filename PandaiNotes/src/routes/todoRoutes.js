const express = require("express");
const todoController = require("../controllers/todoController");

const todoRouter = express.Router();

todoRouter.get("/getAllTodos", todoController.getAllTodos);

todoRouter.get("/getTodo/:todoId", todoController.getTodo);

todoRouter.post("/pushTodo", todoController.createTodo);

todoRouter.patch("/updateTodo/:todoId", todoController.updateTodo);

module.exports = todoRouter;
