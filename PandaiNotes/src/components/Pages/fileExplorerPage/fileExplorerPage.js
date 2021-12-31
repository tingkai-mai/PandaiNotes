import React from "react";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import classes from "./FileExplorerPage.module.css";

import ModuleFilesViewer from "../../HomeComponents/ModuleFilesViewer/ModuleFilesViewer";

const FileExplorerPage = (props) => {
  return (
    <>
      <Container>
        <Row className={classes.title}>
          File explorer
        </Row>

        <hr className={classes["solid-divider"]}></hr>

        <Row>
          <ModuleFilesViewer changeModule={props.onModuleActive} />
        </Row>
      </Container>
    </>
  );
}

export default FileExplorerPage;
