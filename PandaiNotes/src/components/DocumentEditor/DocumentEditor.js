import { Editor, PluginManager } from "@tinymce/tinymce-react";
import tinymce from "tinymce/tinymce";
import { useRef, useState, useEffect } from "react";
import { SAMPLE_NOTE_BIG, SAMPLE_NOTE_SMALL } from "../../db/SAMPLE_NOTES_DB";
import { v4 as uuidv4 } from "uuid";

// Change Me
const CHOSEN_NOTE = SAMPLE_NOTE_SMALL;

const axios = require("axios");
tinymce.PluginManager.add("tag-difficult", function (editor) {
  console.log("setting up context-menu");
  editor.ui.registry.addMenuItem("tag-difficult", {
    text: "tag as difficult",
    icon: "image",
    onAction: function () {
      console.log("action called");
      var comment = prompt("Annotate difficult content");
      editor.annotator.annotate("difficult", {
        uid: uuidv4(),
        comment: comment,
      });
      editor.focus();
    },
  });

  editor.ui.registry.addContextMenu("tag-difficult", {
    update: function (element) {
      return "tag-difficult";
    },
  });
});

const settings = {
  selector: "textarea",
  contextmenu: "tag-difficult link table forecolor backcolor",
  toolbar: [
    "difficult undo redo save | fontselect fontsizeselect | alignleft aligncenter alignright alignnone | formatselect | bullist numlist outdent indent | help ",
    "bold italic underline strikethrough forecolor backcolor cut paste | image media | visualblocks table anchor",
  ],
  plugins: [
    "tag-difficult advlist autolink lists link image",
    "charmap print preview anchor help",
    "searchreplace visualblocks code",
    "insertdatetime media table paste wordcount",
    "save textcolor colorpicker",
  ],
  height: "100vh",
  menubar: false,
  resize: false,
  content_style:
    ".mce-annotation { background-color: darkgreen; color: white; } " +
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

  setup: function (editor) {
    console.log("setting up annotation");
    editor.ui.registry.addButton("difficult", {
      text: "Difficult topic",
      onAction: function () {
        var comment = prompt("Annotate difficult content");
        editor.annotator.annotate("difficult", {
          uid: uuidv4(),
          comment: comment,
        });
        editor.focus();
      },
      onSetup: function (btnApi) {
        editor.annotator.annotationChanged(
          "difficult",
          function (state, name, obj) {
            console.log("Selecting difficult annotation: ", state);
            btnApi.setDisabled(state);
          }
        );
      },
    });

    editor.on("init", function () {
      editor.annotator.register("difficult", {
        persistent: true,
        decorate: function (uid, data) {
          return {
            attributes: {
              "data-mce-comment": data.comment ? data.comment : "",
              "data-mce-author": data.author ? data.author : "anonymous",
            },
          };
        },
      });
    });
  },
};

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
        .post("http://localhost:3001/api/v1/txtedit", {
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
        initialValue={CHOSEN_NOTE}
        init={settings}
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
