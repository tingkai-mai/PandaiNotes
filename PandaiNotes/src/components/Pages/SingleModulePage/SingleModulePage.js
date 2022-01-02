import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SingleModulePage = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div>{props.currModule}</div>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <Button>Assignment</Button>
        </Col>
        <Col>
          <Button>Lectures</Button>
        </Col>
        <Col>
          <Button>Tutorials</Button>
        </Col>
        <Col>
          <Button>Notes</Button>
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default SingleModulePage;
