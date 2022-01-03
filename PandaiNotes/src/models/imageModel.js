const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  link: {
    type: String,
    required: [true, "An image must contain a link to where it is stored!"],
  },
});

const StoredImage = mongoose.model("Image", imageSchema);
module.exports = StoredImage;
