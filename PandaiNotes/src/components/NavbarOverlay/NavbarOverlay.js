import React from "react";
import classes from "./NavbarOverlay.module.css";
import { Nav, Navbar, Container, Row, Col, Collapse } from "react-bootstrap";

import { NavbarOverlayData } from "./NavbarOverlayData";

const NavbarOverlay = (props) => {
  return (
    <Navbar className={`${classes["side-navbar"]} flex-column`}>
      <h1 onClick={() => {props.onCloseNavbar(); props.onCloseOverlay(); }}>
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
                    switch(val.title) {
                      case "To-Do":
                        props.onTodoPage();
                        break;
                      case "New Note":
                        props.onCloseNavbar(); 
                        props.onCloseOverlay();
                        break;
                      case "Files":
                        props.onFileExplorerPage();
                        break;
                      case "Community":
                        props.onCommunityPage();
                        break;
                      case "Calendar":
                        props.onCalendarPage();
                        break;
                      case "Modules":
                        props.onModulePage();
                        break;
                      case "Settings":
                        props.onSettingsPage();
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

export default NavbarOverlay;
