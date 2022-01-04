import React from "react";
import { Container, Row } from "react-bootstrap";
import ModuleFileExplorer from "../../HomeComponents/ModuleFileExplorer/ModuleFileExplorer";

const ExportFilePage = (props) => {
  return (
    <Container>
      <ModuleFileExplorer headerName={"Export"} />
    </Container>
  );
};

export default ExportFilePage;
