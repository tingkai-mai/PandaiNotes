import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import classes from "./SingleModulePage.module.css";
import { MODULES } from "../../../db/SAMPLE_MODULES_CURRENT_DB";

const SingleModulePage = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={`${classes["title"]} flex-column`}>{props.currModule}</div>
        </Col>
      </Row>
      <Row></Row>
      <hr></hr>
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
    </Container>
  );
};

export default SingleModulePage;
