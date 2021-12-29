const mongoose = require("mongoose");

// Schema for a single document in the text editor
const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A document must have a name!"],
  },
  // Document need not necessarily be assigned to a module
  module: {
    type: String,
  },
  dateCreated: {
    type: Date,
    required: [true, "A document must contain a created date!"],
  },
  content: {
    type: String,
    required: [true, "A document must have content inside it!"],
  },
});

// The Document database is created based on this model here, we will refer to it when applying CRUD operations
const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
