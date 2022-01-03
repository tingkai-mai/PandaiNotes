import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ExportFile from "../ExportFile/ExportFile";

const NavbarManager = (props) => {
  

  return (
    <Container>
      { props.onCurrPage }
    </Container>
  );
};

export default NavbarManager;
