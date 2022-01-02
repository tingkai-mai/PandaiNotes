import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./ViewFile.module.css";

import SingleModulePage from "../SingleModulePage/SingleModulePage";
import ModuleFilesExplorer from "../../HomeComponents/ModuleFileExplorer/ModuleFileExplorer";

const ViewFilePage = (props) => {
  return (
    <>
      <h1>Files</h1>
      <ModuleFilesExplorer />
    </>
  );
};

export default ViewFilePage;
