import React from "react";
import { Container, Dropdown, Row, Col, Button } from "react-bootstrap";
import classes from "./ViewFile.module.css";

import ModuleFilesViewer from "../../HomeComponents/ModuleFilesViewer/ModuleFilesViewer";

const FileExplorerPage = (props) => {
  const changeModule = props.onModuleActive;

  return (
    <>
      <Container>
        <Row className={classes.title}>
          File explorer {props.currModule}
        </Row>

        <hr className={classes["solid-divider"]}></hr>

        <Row>
          <ModuleFilesViewer currModuleinner={props.currModule} changeModuleinner={changeModule} />
          
        </Row>
      </Container>
    </>
  );
}

export default FileExplorerPage;
