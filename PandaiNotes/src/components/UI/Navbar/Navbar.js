import React from "react";
import classes from "./Navbar.module.css";
import { NavbarData } from "./NavbarData";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarInternal() {
  return (
    <Navbar className={`${classes["side-navbar"]} flex-column`}>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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
