import React from "react";
import classes from "./Navbar.module.css";
import { NavbarData } from "./NavbarData";

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <ul className={classes.NavbarList}>
        {NavbarData.map((val, key) => {
          return (
            <li
              key={key}
              className={classes.row}
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={console.log("test")}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
