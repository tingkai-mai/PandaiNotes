import React from "react";
import classes from "./NavbarOverlay.module.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

import { NavbarOverlayData } from "./NavbarOverlayData";

const NavbarOverlay = (props) => {
  // content for the navbar overlay that pops out when on home

  // handles page switching on the navbar
  const pageHandler = (item) => {
    switch (item) {
      case "New Note":
        props.onCloseNavbar();
        props.onCloseOverlay();
        break;
      case item:
        props.onOpenPage(item);
    }
  }

  return (
    // opens and closes both overlays
    <Navbar className={`${classes["side-navbar"]} flex-column`}>
      <h1
        onClick={() => {
          props.onCloseNavbar();
          props.onCloseOverlay();
        }}
      >
        Pandai Notes
      </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto flex-column">
          <Nav.Link className={`${classes["sidebar-list"]} flex-row`}>
            {NavbarOverlayData.map((val, key) => {
              return (
                <li
                  key={key}
                  className={classes.row}
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                      pageHandler(val.title);
                    }
                  }
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

export default NavbarOverlay;
