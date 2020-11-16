import React from 'react';
import { FaBars } from 'react-icons/fa';
import UnnatiLogo from '../../icons/UnnatiTree.svg';
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavTitle,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavTitle>
          <img src={UnnatiLogo} alt='UnnatiLogo' />U N N A T I
        </NavTitle>
        <NavMenu>
          <NavItem>
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='about'>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='courses'>Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='stories'>Our Entrepreneurs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='stories'>Stories</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Login</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
