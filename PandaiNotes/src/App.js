import DocumentEditor from "./components/DocumentEditor/DocumentEditor";
import NavbarInternal from "./components/UI/Navbar/Navbar";
import OverlayMain from "./components/OverlayMain/OverlayMain";
import NavbarOverlay from "./components/NavbarOverlay/NavbarOverlay";

import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // Create overlay handler

  const [overlayActive, setOverlayActive] = useState(true);
  const [NavbarActive, setNavbarActive] = useState(false);

  const closeOverlayHandler = () => {
    setOverlayActive(false);
  }

  const openOverlayHandler = () => {
    setOverlayActive(true);
  }

  const closeNavbarHandler = () => {
    setNavbarActive(false);
  }

  const openNavbarHandler = () => {
    setNavbarActive(true);
  }

  return (
    <Container fluid className="vh-100">
      <Row>
        <Col className="col-2">
          {NavbarActive ? <NavbarOverlay /> : <NavbarInternal onOpenNavbar={openNavbarHandler} onOpenOverlay={openOverlayHandler}/>}
        </Col>
        <Col>{overlayActive ? <OverlayMain /> : <DocumentEditor />}</Col>
      </Row>
    </Container>
  );
}

export default App;
