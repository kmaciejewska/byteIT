import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  Logo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoImg
} from "./NavbarElements";
import logo from "../images/logo.svg"

export default function Navbar(props) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Logo to="/"><LogoImg src={logo}></LogoImg>byteIT</Logo>
          <MobileIcon onClick={props.toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contactS">contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
