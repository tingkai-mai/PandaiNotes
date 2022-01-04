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
            headerName={props.mainHeader}
            onChangeModule={setModulePage}
          />
        ) : (
          <ModuleFileViewer headerName={props.mainHeader} />
        )}
      </Container>
    </>
  );
};

export default ModuleFileTemplate;
