import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import './Navbar.css';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' className='nav-link'>
            U N N A T I
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' className='nav-link'>
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='courses' className='nav-link'>
                Courses
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup' className='nav-link'>
                Sign Up
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact' className='nav-link'>
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin' className='nav-link'>
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export { Navbar };
