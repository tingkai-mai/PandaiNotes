import React, { useState, useReducer } from "react";
import { Card } from "react-bootstrap";
import ModuleCard from "../UI/Card/ModuleCard";
import TodoPage from "../Pages/TodoPage/TodoPage";
import FileExplorerPage from "../Pages/FileExplorerPage/FileExplorerPage";

import { Container, Row, Col } from "react-bootstrap";

const OverlayMain = (props) => {
  const currstate = props.onOverlayPage;
  console.log(currstate);

  return (
    <Container>
      <Row>
        <Col>{currstate}</Col>
      </Row>
    </Container>
  );
};

export default OverlayMain;
