import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from "react";
import { SAMPLE_NOTE } from "../../db/SAMPLE_NOTES_DB";

const axios = require("axios");
function DocumentEditor({ initialValue }) {
  const editorRef = useRef(null);
  const [dirty, setDirty] = useState(false);
  useEffect(() => setDirty(false), [initialValue]);
  const save = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      setDirty(false);
      editorRef.current.setDirty(false);
      axios
        .post("http://localhost:3000/api/v1/txtedit", {
          document_content: content,
        })
        .then((res) => {
          console.log(`statusCode: ${res.status}`);
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(content);
    }
  };
  return (
    <>
      <Editor
        apiKey="d3f45aljwuxlcvru4bo029urhq9qjtrutg60orm85vtmuzxh"
        initialValue={SAMPLE_NOTE}
        init={{
          height: "100vh",
          menubar: false,
          resize: false,
          contextmenu: "link image table forecolor backcolor",
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
            "save textcolor colorpicker",
          ],
          toolbar: [
            "undo redo save | fontselect fontsizeselect | alignleft aligncenter alignright alignnone | formatselect | bullist numlist outdent indent | help ",
            "bold italic underline strikethrough forecolor backcolor cut paste | image media | visualblocks table anchor",
          ],
        }}
        onInit={(evt, editor) => (editorRef.current = editor)}
        onDirty={() => setDirty(true)}
      />
      <button onClick={save} disabled={!dirty}>
        Save
      </button>
      {dirty && <p>You have unsaved content!</p>}
    </>
  );
}
export default DocumentEditor;
