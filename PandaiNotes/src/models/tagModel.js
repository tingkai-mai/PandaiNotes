const mongoose = require("mongoose");
const Document = require("./documentModel");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tag must have its own name!"],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  content: {
    type: String,
    requried: [true, "A tag must have some stored content!"],
  },
  document: {
    type: mongoose.Schema.ObjectId,
    ref: "Document",
  },
});

const StoredTag = mongoose.model("Tag", tagSchema);
module.exports = StoredTag;
