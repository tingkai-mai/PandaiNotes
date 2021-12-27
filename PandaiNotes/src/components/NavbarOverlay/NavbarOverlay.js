import React from "react";
import classes from "./NavbarOverlay.module.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { NavbarOverlayData } from "./NavbarOverlayData";

function NavbarOverlay() {


    return (
        <Navbar className={`${classes["side-navbar"]} flex-column`}>
          <Navbar.Brand href="#home">Pandai-Notes</Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-column">
              <Nav.Link className={`${classes["sidebar-list"]} flex-column`}>
                {NavbarOverlayData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className={classes.row}
                      id={window.location.pathname === val.link ? "active" : ""}
                      onClick={() => {
                        window.location.pathname = val.link;
                      }}
                    >
                      <div id="icon">{val.icon}</div>
                      <div id="title">{val.title}</div>
                    </li>
                  );
                })}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default NavbarOverlay
