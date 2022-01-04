const express = require("express");
const documentController = require("./../controllers/documentController");

const documentRouter = express.Router();

documentRouter.get("/getAllDocuments", documentController.getAllDocuments);

documentRouter.get("/getDocument/:documentId", documentController.getDocument);

documentRouter.post("/pushDocument", documentController.createDocument);

documentRouter.patch(
  "/updateDocument/:documentId",
  documentController.updateDocument
);

module.exports = documentRouter;
