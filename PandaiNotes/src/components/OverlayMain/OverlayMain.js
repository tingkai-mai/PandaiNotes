import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SingleModulePage from "../Pages/SingleModulePage/SingleModulePage";

const OverlayMain = (props) => {
  const currstate = props.onOverlayPage;
  console.log(currstate);

  return (
    <Container>
      <Row> 
        <Col>{ currstate } </Col>
      </Row>
    </Container>
  );
};

export default OverlayMain;
