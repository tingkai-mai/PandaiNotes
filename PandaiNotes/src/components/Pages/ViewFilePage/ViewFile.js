import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./ViewFile.module.css";

import SingleModulePage from "../SingleModulePage/SingleModulePage";
import ModulePageMain from "../../ModulePageMain/ModulePageMain";

const FileExplorerPage = (props) => {
  const [ModuleActive, setModuleActive] = useState("none");

  return (
    <>
      <Container>
          {ModuleActive === "none" ? <ModulePageMain test={ModuleActive} onChangeModule={setModuleActive}/> : <SingleModulePage currModule={ModuleActive}/> }
      </Container>
    </>
  );
}

export default FileExplorerPage;
