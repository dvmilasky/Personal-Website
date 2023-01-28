import React from "react";
import { Nav, NavLink, Logo } 
    from "./NavbarElements";
import logo from "../../assets/logo_transparent.png"
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo src={logo} ></Logo>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/resume" activeStyle>
          Resume
        </NavLink>
      </Nav>
    </>
  );
};
  
export default Navbar;