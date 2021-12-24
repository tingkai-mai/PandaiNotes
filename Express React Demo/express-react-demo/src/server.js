const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const app = express();

// ADDED @IAN
var cors = require("cors");
app.use(cors()); // Use this after the variable declaration

// Define middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello from the server");
});

app.post("/api/v1/txtedit", (req, res) => {
  console.log("Connected to react...");
  console.log(req);
  fs.writeFile("editorLogs.txt", JSON.stringify(req.body), () => {
    console.log("File written!");
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
