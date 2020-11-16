// NavLogo should be a react-scroll-link when the user is on the homepage , however it should be a react router link to redirect the user
// to the homepage of the website

import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import UnnatiLogo from '../../icons/UnnatiTree.svg';
import './Navbar.css';

import {
  Nav,
  NavbarContainer,
  NavbarMiddle,
  NavLogo,
  NavName,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavbarRight,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMiddle>
            <NavLogo
              to='home'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-120}
            >
              <img
                src={UnnatiLogo}
                alt='UnnatiLogo'
                style={{ height: '50px' }}
              />
              <NavName>U N N A T I</NavName>
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='home'
                  className='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-120}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-120}
                >
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='courses'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-120}
                >
                  Courses
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='testimonials'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-150}
                >
                  Student Stories
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='footer'
                  className='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-550}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarMiddle>
          <NavbarRight>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavbarRight>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export { Navbar };
