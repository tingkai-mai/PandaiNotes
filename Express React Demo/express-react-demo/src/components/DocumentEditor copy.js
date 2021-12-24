import { Editor } from "@tinymce/tinymce-react";
import { Fragment } from "react";

const axios = require("axios");

const DocumentEditor = (props) => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  const submitHandler = async (e) => {
    console.log("CALLED");
    const article = { title: "React POST Request Example" };
    axios
      .post("http://localhost:3000/api/v1/txtedit", article)
      .then((response) => this.setState({ articleId: response.data.id }));
  };

  return (
    <Fragment>
      <form method="POST" onSubmit={submitHandler}></form>
      <button type="submit" onClick={submitHandler}>
        TEST
      </button>
    </Fragment>
  );
};

export default DocumentEditor;
