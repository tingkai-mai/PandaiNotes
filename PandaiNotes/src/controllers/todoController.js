const Todo = require("./../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        todo: todo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        todo: todo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      data: {
        todos: todos,
        descriptions: todos.map((el) => el.description),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todoId).populate({
      path: "module",
      select: "-__v",
    });
    res.status(200).json({
      status: "success",
      data: {
        todo: todo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: `Could not find todo task with associated id: ${req.params.todoId}`,
    });
  }
};
