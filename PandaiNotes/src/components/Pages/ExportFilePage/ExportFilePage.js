import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import classes from "./ExportFilePage.module.css";


// placeholder for ExportFilePage
const ExportFilePage = (props) => {
  return (
    <Container>
      <Row>
        <div className={`${classes["title"]} flex-column`}>Export</div>
      </Row>
      <hr></hr>
      <Row>
        <Button variant="outline-secondary" size="lg">
          Download Locally
        </Button>
      </Row>
      <Row>
        <Button variant="outline-secondary" size="lg">
          Save As
        </Button>
      </Row>
      <Row>
        <Button variant="outline-secondary" size="lg">
          Export to Community
        </Button>
      </Row>
      <Row>
        <Button variant="outline-secondary" size="lg">
          Settings
        </Button>
      </Row>
    </Container>
  );
};

export default ExportFilePage;
