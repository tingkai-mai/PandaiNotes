import React from "react";
import classes from "./Navbar.module.css";
import { NavbarData } from "./NavbarData";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarInternal() {
  

  return (
    <Navbar className={`${classes["side-navbar"]} flex-column`}>
      <Navbar.Brand href="#home">Pandai-Notes</Navbar.Brand>
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

export default NavbarInternal;

// function Navbar() {
//   return (
//     <div className={classes.Navbar}>
//       <ul className={classes.NavbarList}>
//         {NavbarData.map((val, key) => {
//           return (
//             <li
//               key={key}
//               className={classes.row}
//               id={window.location.pathname === val.link ? "active" : ""}
//               onClick={console.log("test")}
//             >
//               <div id="icon">{val.icon}</div>
//               <div id="title">{val.title}</div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
