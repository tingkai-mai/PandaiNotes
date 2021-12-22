// import Navbar from "./components/UI/Navbar/Navbar";
import classes from "./App.module.css";
import DocumentEditor from "./components/DocumentEditor/DocumentEditor";

import NavbarInternal from "./components/UI/Navbar/Navbar";

import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Col className="col-2">
          <NavbarInternal />
        </Col>
        <Col>
          <DocumentEditor />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
