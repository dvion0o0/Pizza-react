import React from "react";
import { NavLink, NavToggle, Nav, Bars } from "./NavbarStyles";
const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">Pizza</NavLink>
      <NavToggle onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavToggle>
    </Nav>
  );
};

export default Navbar;
