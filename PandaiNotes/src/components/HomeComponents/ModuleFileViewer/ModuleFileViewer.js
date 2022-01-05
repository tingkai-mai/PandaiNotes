import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import classes from "./ModuleFileViewer.module.css";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";
import NotesCard from "../../UI/NotesCard/NotesCard";
import { SAMPLE_NOTE_ALL } from "../../../db/SAMPLE_NOTE_ALL";

const ModuleFileViewer = (props) => {

  const currentModule = props.viewcurrMod;

  const filteredModule = SAMPLE_NOTE_ALL.filter(item => item.module === currentModule);

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary">Assignment</Button>
        </Col>
        <Col>
          <Button variant="secondary">Lectures</Button>
        </Col>
        <Col>
          <Button variant="secondary">Tutorials</Button>
        </Col>
        <Col>
          <Button variant="secondary">Notes</Button>
        </Col>
        <Col>
          <Button variant="secondary">Summary</Button>
        </Col>
      </Row>
      <hr></hr>
      <Row>
      {filteredModule.map((module) => {
          return (
            <NotesCard noteTitle={module.title} noteDesc={module.desc}/>
          );
        })}
      </Row>
    </Container>
  );
};

export default ModuleFileViewer;
