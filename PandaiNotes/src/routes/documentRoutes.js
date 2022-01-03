const express = require("express");
const documentController = require("./../controllers/documentController");

const documentRouter = express.Router();

documentRouter.get("/getAllDocuments", documentController.getAllDocuments);

documentRouter.get(
  "/getdocument/:documentName",
  documentController.getDocument
);

documentRouter.post("/pushDocument", documentController.createDocument);

documentRouter.patch(
  "/updatedDocument/:documentName",
  documentController.updateDocument
);

module.exports = documentRouter;
