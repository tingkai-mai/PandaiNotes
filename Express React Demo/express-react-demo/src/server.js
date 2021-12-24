const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const app = express();

// Define middleware
app.use(morgan("dev"));
app.use(express.json());

app.post("/api/v1/txtedit", (req, res) => {
  console.log("Connected to react...");
  console.log(req.body);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
