import React from "react";
import classes from "./Navbar.module.css";
import { NavbarData } from "./NavbarData";
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap";

const NavbarInternal = (props) => {
  return (
    <Navbar className={`${classes["side-navbar"]} flex-column`}>
      <h1
        onClick={() => {
          props.onOpenNavbar();
          props.onOpenOverlay();
        }}
      >
        Pandai Notes
      </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto flex-column">
          <Nav.Link className={`${classes["sidebar-list"]} flex-column`}>
            {NavbarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className={classes.row}
                  onClick={() => {
                    switch (val.title) {
                      case "Home":
                        props.onOpenNavbar();
                        props.onOpenOverlay();
                        break;
                      case "New Note":
                        props.onCloseInternalOverlay();
                        break;
                      case val.title:
                        props.onOpenInternalOverlay();
                        props.onChangeCurrPage(val.title);
                        break;
                    }
                  }}
                >
                  <Container>
                    <Row>
                      <Col sm={3}>
                        <div id="icon">{val.icon}</div>
                      </Col>
                      <Col sm={8}>
                        <div id="title">{val.title}</div>
                      </Col>
                    </Row>
                  </Container>
                </li>
              );
            })}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarInternal;
