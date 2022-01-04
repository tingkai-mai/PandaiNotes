const mongoose = require("mongoose");
const Todo = require("./todoModel");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A todo category must have its own title!"],
  },
  color: {
    type: String,
    unique: [
      true,
      "An existing todo category with this colour already exists!",
    ],
    required: [true, "A todo category must have its own colour!"],
  },
  // DB reference to Todo db
  todo: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Todo",
    },
  ],
});

const TodoCategory = mongoose.model("TodoCat", CategorySchema);
module.exports = TodoCategory;
