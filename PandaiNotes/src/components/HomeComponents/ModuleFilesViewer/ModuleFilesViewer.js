import React from "react";
import { Nav, Navbar, Container, Row, Col, Collapse } from "react-bootstrap";

import ModuleCard from "../../UI/ModuleCard/ModuleCard";
import { MODULES } from "../../../db/SAMPLE_MODULES_DB";

const ModuleFilesViewer = (props) => {

  
  return (
    <Container>
      <Row>
        {MODULES.map((val, key) => {
          return <ModuleCard mod_code={val.module_code} mod_name={val.module_name} onClick={() => {props.changeModuleinner("CS1101S")}} />
        })};
      </Row>
    </Container>
  );
}

export default ModuleFilesViewer;
