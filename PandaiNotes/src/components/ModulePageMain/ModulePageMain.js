import React from "react";
import { Container, Row } from "react-bootstrap";
import ModuleFilesViewer from "../HomeComponents/ModuleFilesViewer/ModuleFilesViewer";
import classes from "./ModulePageMain.module.css";

const ModulePageMain = (props) => {
  return (
    <Container>
      <Row className={`${classes["title"]} flex-column`}>File Explorer </Row>

      <hr></hr>

        <ModuleFilesViewer changeModule={props.onChangeModule} />
    </Container>
  );
};

export default ModulePageMain;
