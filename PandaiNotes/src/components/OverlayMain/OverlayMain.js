import React, { useState, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SingleModulePage from "../Pages/SingleModulePage/SingleModulePage";

const OverlayMain = (props) => {
  const currstate = props.onOverlayPage;
  console.log(currstate);

  return (
    <Container>
      <Row> 
        <Col>{ props.isModuleActive === 'none' ? currstate : <SingleModulePage mod_code={props.isModuleActive} /> }</Col>
      </Row>
    </Container>
  );
};

export default OverlayMain;
