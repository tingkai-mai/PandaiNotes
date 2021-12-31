import { Editor } from "@tinymce/tinymce-react";
import tinymce from "tinymce/tinymce";
import { useRef, useState, useEffect } from "react";
import { SAMPLE_NOTE_BIG, SAMPLE_NOTE_SMALL } from "../../db/SAMPLE_NOTES_DB";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

// Change Me
const CHOSEN_NOTE = SAMPLE_NOTE_SMALL;

const axios = require("axios");
tinymce.PluginManager.add("tag-difficult", function (editor) {
  console.log("setting up context-menu tag-difficult");
  editor.ui.registry.addMenuItem("tag-difficult", {
    text: "Tag as difficult",
    icon: "bookmark",
    onAction: function () {
      // var comment = prompt("Annotate difficult content");
      editor.annotator.annotate("difficult", {
        uid: uuidv4(),
        // comment: comment,
      });
      editor.focus();
    },
  });

  editor.ui.registry.addContextMenu("tag-difficult", {
    update: function (element) {
      console.log("tagging as difficult");
      return "tag-difficult";
    },
  });
});

tinymce.PluginManager.add("tag-important", function (editor) {
  console.log("setting up context-menu tag-important");
  editor.ui.registry.addMenuItem("tag-important", {
    text: "Tag as important",
    icon: "bookmark",
    onAction: function () {
      // var comment = prompt("Annotate difficult content");
      editor.annotator.annotate("important", {
        uid: uuidv4(),
        // comment: comment,
      });
      editor.focus();
    },
  });

  editor.ui.registry.addContextMenu("tag-important", {
    update: function (element) {
      console.log("tagging as important");
      return "tag-important";
    },
  });
});

tinymce.PluginManager.add("tag-revision", function (editor) {
  console.log("setting up context-menu tag-revision");
  editor.ui.registry.addMenuItem("tag-revision", {
    text: "Tag as things to revise",
    icon: "bookmark",
    onAction: function () {
      // var comment = prompt("Annotate difficult content");
      editor.annotator.annotate("revision", {
        uid: uuidv4(),
        // comment: comment,
      });
      editor.focus();
    },
  });

  editor.ui.registry.addContextMenu("tag-revision", {
    update: function (element) {
      console.log("tagging as revision");
      return "tag-revision";
    },
  });
});

const settings = {
  selector: "textarea",
  contextmenu:
    "link table | tag-difficult tag-important tag-revision |forecolor backcolor",
  toolbar: [
    "grab-tags difficult important revision undo redo save | fontselect fontsizeselect | alignleft aligncenter alignright alignnone | formatselect | bullist numlist outdent indent | help ",
    "bold italic underline strikethrough forecolor backcolor cut paste | image media | visualblocks table anchor",
  ],
  plugins: [
    "tag-difficult tag-important tag-revision advlist autolink lists link image",
    "charmap print preview anchor help",
    "searchreplace visualblocks code",
    "insertdatetime media table paste wordcount",
    "save textcolor colorpicker",
  ],
  height: "100vh",
  menubar: false,
  resize: false,
  content_style: `.mce-annotation { background-color: darkgreen; color: white; }
    span[data-mce-annotation="difficult"] { background-color: yellow; color: black; } 
    span[data-mce-annotation="important"] { background-color: red; color: white; } 
    span[data-mce-annotation="revision"] { background-color: green; color: black; } 
    body { font-family:Helvetica,Arial,sans-serif; font-size:14px }`,

  setup: function (editor) {
    console.log("setting up annotation");

    // Convenience button to grab tags. Uncomment to see it at the top of the menu bar!
    // Uncomment annotator.register("grab-tags", ...) as well
    // editor.ui.registry.addButton("grab-tags", {
    //   text: "grab-tags",
    //   onAction: function () {
    //     console.log(editor.annotator.getAll("difficult"));
    //   },
    //   onSetup: function (btnApi) {
    //     editor.annotator.annotationChanged(
    //       "difficult",
    //       function (state, name, obj) {
    //         console.log("Selecting difficult annotation: ", state);
    //       }
    //     );
    //   },
    // });

    editor.on("init", function () {
      // editor.annotator.register("grab-tags", {
      //   persistent: true,
      //   decorate: function (uid, data) {
      //     return {
      //       attributes: {
      //         "data-tagging-comment": data.comment ? data.comment : "",
      //         // "data-tagging-author": data.author ? data.author : "anonymous",
      //       },
      //     };
      //   },
      // });
      editor.annotator.register("difficult", {
        persistent: true,
        decorate: function (uid, data) {
          return {
            attributes: {
              "data-tagging-comment": data.comment ? data.comment : "",
              // "data-tagging-author": data.author ? data.author : "anonymous",
            },
          };
        },
      });
      editor.annotator.register("important", {
        persistent: true,
        decorate: function (uid, data) {
          return {
            attributes: {
              "data-tagging-comment": data.comment ? data.comment : "",
              // "data-tagging-author": data.author ? data.author : "anonymous",
            },
          };
        },
      });
      editor.annotator.register("revision", {
        persistent: true,
        decorate: function (uid, data) {
          return {
            attributes: {
              "data-tagging-comment": data.comment ? data.comment : "",
              // "data-tagging-author": data.author ? data.author : "anonymous",
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

  const grabTaggedHandler = () => {
    const difficult = tinymce.get()[0].annotator.getAll("difficult");
    const important = tinymce.get()[0].annotator.getAll("important");
    const revision = tinymce.get()[0].annotator.getAll("revision");
    console.log(difficult);
    console.log(important);
    console.log(revision);
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
      <Button onClick={grabTaggedHandler}>Grab tagged</Button>
    </>
  );
}
export default DocumentEditor;
