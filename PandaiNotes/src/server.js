const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

// Catch unhandled exceptions from synchronous functions / standard errors
// === SAFETY NET ===
process.on("unhandledException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

// Importing custom routers
const ImageRouter = require("./routes/imageRoutes");

// add extra environemntal variables to process.env using dotenv package
dotenv.config({ path: `${__dirname}/../config.env` });

// Connect to the database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Returns a promise
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

// ADDED @IAN
app.use(cors()); // Use this after the variable declaration

// Define middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/images", ImageRouter);

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
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Catch unhandled rejection from rejected promises / async functions
// === SAFETY NET ===
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
