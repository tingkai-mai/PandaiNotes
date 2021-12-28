import React, { useState, useReducer } from "react";
import TodoPage from "../Pages/TodoPage/TodoPage";
import FileExplorerPage from "../Pages/FileExplorerPage/FileExplorerPage";

import { Container, Row, Col } from "react-bootstrap";

const OverlayMain = (props) => {
  const [overlayPage, setOverlayPage] = useState(<TodoPage />);

  return (
    <Container>
      <Row>
        <Col>{overlayPage}</Col>
      </Row>
    </Container>
  );
};

export default OverlayMain;
