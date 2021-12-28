import React from "react";
import classes from "./Navbar.module.css";
import { NavbarData } from "./NavbarData";
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap";

const NavbarInternal = (props) => {
  

  return (
    <Navbar className={`${classes["side-navbar"]} flex-column`}>
      <h1>
      <Navbar.Brand onClick={() => {props.onOpenNavbar(); props.onOpenOverlay(); }}>
        Pandai-Notes
      </Navbar.Brand>
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
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    props.onOpenNavbar();
                    props.onOpenOverlay();
                  }}
                >
                  <Container>
                    <Row>
                      <Col sm={3}>
                        <div id="icon">{val.icon}</div>
                      </Col>
                      <Col sm ={8}>
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
}

export default NavbarInternal;
