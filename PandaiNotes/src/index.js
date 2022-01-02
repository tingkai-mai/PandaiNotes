import React from "react";
import ReactDOM from "react-dom";

// Ensure App is imported AFTER ./custom.scss to allow BS5 styling
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { NoteContextProvider } from "./store/note-context";

ReactDOM.render(
  <NoteContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NoteContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
