import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./ViewFile.module.css";
import ModuleFilesExplorer from "../../HomeComponents/ModuleFileExplorer/ModuleFileExplorer";
import ModuleFileViewer from "../ModuleFileViewer/ModuleFileViewer";

const ViewFilePage = (props) => {
  const [currPage, setModulePage] = useState("main");

  return (
    <>
      <Container>
        {currPage === "main" ? (
          <ModuleFilesExplorer
            headerName={"File Explorer"}
            onChangeModule={setModulePage}
          />
        ) : (
          <ModuleFileViewer currModule={currPage} />
        )}
      </Container>
    </>
  );
};

export default ViewFilePage;
