import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./ExportFilePage.module.css";

const ExportFilePage = (props) => {
  return (
    <Container>
      <Row>
        <div className={`${classes["title"]} flex-column`}>Export</div>
      </Row>
      <hr></hr>
      <Row>Download Locally</Row>
      <Row>Save As</Row>
      <Row>Export to Community</Row>
      <Row>Settings</Row>
    </Container>
  );
};

export default ExportFilePage;
