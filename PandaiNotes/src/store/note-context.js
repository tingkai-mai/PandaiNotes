import React, { useState } from "react";
import { SAMPLE_NOTES } from "../db/SAMPLE_NOTES_DB";

// Change me to set the initial note. Should default to "" for the actual code!
// Currently is SAMPLE_NOTE_SMALL for testing purposes.
const EMPTY_NOTE = { id: null, content: "", module: "" };
const INITIAL_NOTE = SAMPLE_NOTES[0];

const axios = require("axios");
const NoteContext = React.createContext({
  noteObject: null,
  onSaveNote: (id, content, module) => {},
  onLoadNote: (id) => {},
});

export const NoteContextProvider = (props) => {
  const [activeNote, setActiveNote] = useState({
    id: INITIAL_NOTE.id,
    content: INITIAL_NOTE.content,
    module: INITIAL_NOTE.module,
  });

  const saveNoteHandler = (id, content, module, tags) => {
    console.log("Saving note");
    console.log("id: ", id);
    console.log("module: ", module);
    console.log("content: ", content);

    // Processing of tags to become an arrayof tags, where
    // {important: [{id: innerHTML}], difficult: [{id: innerHTML}], revision: [{id: innerHTML}]}
    console.log("tags: ", tags);
    for (let [tag_type, content] of Object.entries(tags)) {
      console.log(content);
      for (let [tag_id, html] of Object.entries(content)) {
        // console.log(html[0].innerHTML);
        tags[tag_type][tag_id] = {
          html: html[0].innerHTML,
          comment: html[0].attributes[3].textContent,
        };
      }
    }
    // POST to DB
    axios
      .post("http://localhost:3001/api/v1/documents/pushDocument", {
        name: "Sample Name",
        module: module,
        dateCreated: new Date(),
        content: content,
        tags: [],
      })
      .then((res) => {
        console.log("Successfully saved Note");
        console.log(`statusCode: ${res.status}`);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

    // POST to txt file
    // axios
    //   .post("http://localhost:3001/api/v1/txtedit", {
    //     id: id,
    //     content: content,
    //     module: module,
    //     difficult: tags.difficult,
    //     important: tags.important,
    //     revision: tags.revision,
    //   })
    //   .then((res) => {
    //     console.log(`statusCode: ${res.status}`);
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const loadNoteHandler = (id) => {
    id = "61d456c5a2191d3b44ecacb4"; // REMOVE
    axios
      .get(`http://localhost:3001/api/v1/documents/getDocument/${id}`)
      .then((res) => {
        console.log("Successfully loaded Note");
        console.log(`statusCode: ${res.status}`);
        console.log(res);
        const noteID = res.data.data.document._id;
        const noteContent = res.data.data.content;
        const noteModule = res.data.data.document.module;
        console.log(noteID);
        console.log(noteContent);
        console.log(noteModule);
        setActiveNote({ id: noteID, content: noteContent, module: noteModule });
      })
      .catch((error) => {
        console.log(
          "Error: Document ID does not exist in Database. This shouldn't happen..."
        );
        console.error(error);
      });
  };

  return (
    <NoteContext.Provider
      value={{
        noteObject: activeNote,
        onSaveNote: saveNoteHandler,
        onLoadNote: loadNoteHandler,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
