import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ModuleFileTemplate from "../../HomeComponents/ModuleFileTemplate/ModuleFileTemplate";

const SaveFilePage = (props) => {
  return (
    <>
      <Container>
        <ModuleFileTemplate mainHeader={"Save"} useCase="SAVEFILE" />
      </Container>
    </>
  );
};

export default SaveFilePage;
