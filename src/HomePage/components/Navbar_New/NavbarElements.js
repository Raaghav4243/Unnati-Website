import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

// global settings for navbar element
export const Nav = styled.nav`
  background: #ffffff;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
`;

// global setting for all elements inside navbar
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1450px;
`;

// the hamburger when viewed on smaller screen
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }

  @media screen and (max-width: 498px) {
    font-size: 1.3rem;
  }
`;

export const NavbarMiddle = styled.div`
  display: flex;
  width: 80%;

  @media screen and (max-width: 768px) {
    padding-left: 50px;
    justify-content: center;
    width: 65%;
  }
`;

// for the logo, added a react router link to it, like a home page button
export const NavLogo = styled(LinkS)`
  color: #000;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  text-align: nowrap;

  @media screen and (max-width: 768px) {
    padding-left: 10%;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1rem;
    padding-left: 20%;
  }
`;

export const NavName = styled.p`
  text-align: nowrap;
  padding-left: 10px;
  width: 160px;
`;

// the menu for desktop view ,  it is a ul
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  width: 600px;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// the Menu has many li
export const NavItem = styled.li`
  height: 65px;
  &:hover {
    background-color: #f6f6f6;
  }
`;

// these li contain React scroll links
export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  // when link is active, then border bottom is coloured
  &.active {
    border-bottom: 3px solid red;
    /* background-color: #f6f6f6; */
  }
`;

export const NavbarRight = styled.nav`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #f8971d;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* New CSS */

  display: block;
  position: relative;

  text-align: center;

  /* For shine */
  background-repeat: no-repeat;
  background-position: -120px -120px, 0 0;

  background-image: -webkit-linear-gradient(
    top left,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: -moz-linear-gradient(
    0 0,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: -o-linear-gradient(
    0 0,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );
  background-image: linear-gradient(
    0 0,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 45%,
    rgba(255, 255, 255, 0) 50%
  );

  -moz-background-size: 250% 250%, 100% 100%;
  background-size: 250% 250%, 100% 100%;

  -webkit-transition: background-position 0s ease;
  -moz-transition: background-position 0s ease;
  -o-transition: background-position 0s ease;
  transition: background-position 0s ease;

  &:hover {
    background-position: 0 0, 0 0;

    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 18px;
  }

  @media screen and (max-width: 498px) {
    font-size: 14px;
    padding: 5px 10px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
    padding: 5px 7px;
  }
`;
