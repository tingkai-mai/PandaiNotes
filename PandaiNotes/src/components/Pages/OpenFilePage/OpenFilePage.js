import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ModuleFileTemplate from "../../HomeComponents/ModuleFileTemplate/ModuleFileTemplate";

const OpenFilePage = (props) => {
  return (
    <>
      <Container>
        <ModuleFileTemplate mainHeader={"Open"} useCase="OPENFILE" />
      </Container>
    </>
  );
}

export default OpenFilePage;
