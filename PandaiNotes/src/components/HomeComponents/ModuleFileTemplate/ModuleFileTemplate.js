import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ModuleFileExplorer from "../ModuleFileExplorer/ModuleFileExplorer";
import ModuleFileViewer from "../../HomeComponents/ModuleFileViewer/ModuleFileViewer";

const ModuleFileTemplate = (props) => {
  const [currPage, setModulePage] = useState("main");

  return (
    <>
      <Container>
        {currPage === "main" ? (
          <ModuleFileExplorer
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

export default ModuleFileTemplate;
