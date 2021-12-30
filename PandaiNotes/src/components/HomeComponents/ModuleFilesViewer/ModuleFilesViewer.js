import React from "react";
import { Nav, Navbar, Container, Row, Col, Collapse } from "react-bootstrap";

import ModuleCard from "../../UI/ModuleCard/ModuleCard";
import { MODULES } from "../../../db/SAMPLE_MODULES_DB";

const ModuleFilesViewer = (props) => {

  
  return (
    <Container>
      <Row>
        {MODULES.map((val, key) => {
          return <ModuleCard mod_code={val.module_code} mod_name={val.module_name} onClick={() => {props.changemodule(val.module_code)}} />
        })};
      </Row>
    </Container>
  );
}

export default ModuleFilesViewer;
