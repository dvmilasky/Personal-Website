import React from "react";
import { Nav, NavLink, NavMenu, Logo } 
    from "./NavbarElements";
import logo from "../../assets/logo_transparent.png"
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo src={logo} ></Logo>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;