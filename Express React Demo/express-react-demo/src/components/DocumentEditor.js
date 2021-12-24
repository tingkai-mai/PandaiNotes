import { Editor } from "@tinymce/tinymce-react";
import { Fragment } from "react";
import Test from "./Test";

const axios = require("axios");

const DocumentEditor = (props) => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return <Test />;
};

export default DocumentEditor;
