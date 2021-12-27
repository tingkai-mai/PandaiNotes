import React, { createContext } from "react";

const NoteContext = React.createContext({
  id: NaN,
  content: NaN,
  module: None,
});

export default NoteContext;
