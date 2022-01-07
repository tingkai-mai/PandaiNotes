import { Editor } from "@tinymce/tinymce-react";
import tinymce from "tinymce/tinymce";
import { MODULES_ALL_IN_NUS } from "../../db/SAMPLE_MODULES_MASTER";
import { useRef, useState, useEffect, useContext } from "react";
import NoteContext from "../../store/note-context";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { FiAlertTriangle } from "react-icons/fi";
import classes from "./DocumentEditor.module.scss";

tinymce.PluginManager.add("tag-difficult", function (editor) {
  console.log("setting up context-menu tag-difficult");
  editor.ui.registry.addMenuItem("tag-difficult", {
    text: "Tag as difficult",
    icon: "bookmark",
    onAction: function () {
      var comment = prompt("Tag difficult content");
      editor.annotator.annotate("difficult", {
        uid: uuidv4(),
        comment: comment,
      });
      editor.focus();
    },
    onSetup: function (btnApi) {
      console.log("called");
      editor.annotator.annotationChanged(
        "difficult",
        function (state, name, obj) {
          console.log("Current selection has an annotation: ", state);
        }
      );
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
      var comment = prompt("Tag important content");
      editor.annotator.annotate("important", {
        uid: uuidv4(),
        comment: comment,
      });
      editor.focus();
    },
    onSetup: function (btnApi) {
      console.log("called");
      editor.annotator.annotationChanged(
        "difficult",
        function (state, name, obj) {
          console.log("Current selection has an annotation: ", state);
        }
      );
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
      var comment = prompt("Tag content for revision");
      editor.annotator.annotate("revision", {
        uid: uuidv4(),
        comment: comment,
      });
      editor.focus();
    },
    onSetup: function (btnApi) {
      console.log("called");
      editor.annotator.annotationChanged(
        "difficult",
        function (state, name, obj) {
          console.log("Current selection has an annotation: ", state);
        }
      );
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
  // Style highlighted content here
  content_style: `.mce-annotation { background-color: darkgreen; color: white; }
    span[data-mce-annotation="difficult"] { background-color: yellow; color: black; } 
    span[data-mce-annotation="important"] { background-color: red; color: white; } 
    span[data-mce-annotation="revision"] { background-color: green; color: black; } 
    body { font-family:Helvetica,Arial,sans-serif; font-size:14px }`,
  init_instance_callback: function (editor) {
    editor.on("ExecCommand", function (e) {
      console.log(e);
      console.log("The " + e.command + " command was fired.");
    });
  },

  setup: function (editor) {
    // Convenience button to grab tags.
    editor.ui.registry.addButton("grab-tags", {
      text: "Grab tags",
      onAction: function () {
        console.log("Difficult: ", editor.annotator.getAll("difficult"));
        console.log("Important: ", editor.annotator.getAll("important"));
        console.log("Revision: ", editor.annotator.getAll("revision"));
      },
      onSetup: function (btnApi) {
        editor.annotator.annotationChanged(
          "difficult",
          function (state, name, obj) {
            console.log("Selecting difficult annotation: ", state);
          }
        );
      },
    });

    editor.on("init", function () {
      editor.annotator.register("grab-tags", {
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

// TODO: Prompt users to save when navigating away from page!!

function DocumentEditor({ initialValue }) {
  const editorRef = useRef(null);
  const moduleRef = useRef();
  const [dirty, setDirty] = useState(false);
  useEffect(() => setDirty(false), [initialValue]);

  const noteCtx = useContext(NoteContext);

  const save = () => {
    const content = editorRef.current.getContent();
    setDirty(false);
    editorRef.current.setDirty(false);
    const tags = {
      difficult: tinymce.get()[0].annotator.getAll("difficult"),
      important: tinymce.get()[0].annotator.getAll("important"),
      revision: tinymce.get()[0].annotator.getAll("revision"),
    };
    // Checks if the Note is new or not. If it's a new Note, prompt user to Save As...
    // NOTE: Saving should eventually be handled by SaveFile component. User should be able to choose the module
    // the note is attached to. For now, a simple dropdown is implemented.
    if (noteCtx.noteObject.id === null) {
      console.log("New note detected");
      console.log("Raise Save As...");
    } else {
      noteCtx.onSaveNote(
        noteCtx.noteObject.id,
        content,
        moduleRef.current.value,
        tags
      );
    }
  };

  return (
    <>
      <div>
        <Button onClick={noteCtx.onLoadNote}>Load Note</Button>
        <Form className="mt-2">
          <Form.Label>Choose the module this note belongs to:</Form.Label>
          <Form.Select
            size="lg"
            ref={moduleRef}
            onChange={() => {
              console.log(moduleRef.current.value);
            }}
          >
            {MODULES_ALL_IN_NUS.filter(
              (mod) => mod.taken === "current" || mod.taken === "over"
            ).map((mod) => (
              <option>{`${mod.module_code} ${mod.module_name}`}</option>
            ))}
          </Form.Select>
        </Form>
        {dirty ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You have unsaved changes!</Tooltip>}
          >
            <Button variant="outline-warning">
              <FiAlertTriangle />
            </Button>
          </OverlayTrigger>
        ) : (
          <div className={classes["filler"]} />
        )}
      </div>
      <Editor
        apiKey="d3f45aljwuxlcvru4bo029urhq9qjtrutg60orm85vtmuzxh"
        initialValue={noteCtx.noteObject.content}
        init={settings}
        onInit={(evt, editor) => (editorRef.current = editor)}
        onDirty={() => setDirty(true)}
      />
      <button onClick={save} disabled={!dirty}>
        Save
      </button>
    </>
  );
}
export default DocumentEditor;
