const mongoose = require("mongoose");
const Module = require("./moduleModel");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A todo task must have a name or a title!"],
  },
  description: {
    type: String,
  },
  deadline: {
    type: Date,
    default: Date.now(),
  },
  // DB reference to Module db
  module: {
    type: mongoose.Schema.ObjectId,
    ref: "Module",
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
