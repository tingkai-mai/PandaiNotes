import DocumentEditor from "./components/DocumentEditor/DocumentEditor";
import NavbarInternal from "./components/UI/Navbar/Navbar";
import OverlayMain from "./components/OverlayMain/OverlayMain";

import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // Create overlay handler

  const [overlayActive, setOverlayActive] = useState(true);
  return (
    <Container fluid>
      <Row>
        <Col className="col-2">
          <NavbarInternal />
        </Col>
        <Col>{overlayActive ? <OverlayMain /> : <DocumentEditor />}</Col>
      </Row>
    </Container>
  );
}

export default App;
