import { React } from "react";
import { Container } from "react-bootstrap";

// this is actually impt 
const NavbarManager = (props) => {
  return <Container>{props.onCurrPage}</Container>;
};

export default NavbarManager;
