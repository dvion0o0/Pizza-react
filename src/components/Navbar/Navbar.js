import React from "react";
import { NavLink, NavToggle, Nav, Bars } from "./NavbarStyles";
const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Pizza</NavLink>
      <NavToggle>
        <p>Menu</p>
        <Bars />
      </NavToggle>
    </Nav>
  );
};

export default Navbar;
