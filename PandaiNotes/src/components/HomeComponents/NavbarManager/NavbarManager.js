import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExportFilePage from "../../Pages/ExportFilePage/ExportFilePage";

// this is actually impt 
const NavbarManager = (props) => {
  return <Container>{props.onCurrPage}</Container>;
};

export default NavbarManager;
