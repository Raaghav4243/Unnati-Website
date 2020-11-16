import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

// global settings for navbar element
export const Nav = styled.nav`
  background: #ffd200;
  height: 100px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

// global setting for all elements inside navbar
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// for the logo, added a react router link to it, like a home page button
export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  /* border: 5px solid #ef4656; */
  /* border-radius: 60px; */
  /* padding: 2px 50px; */
`;

// the hamburger when viewed on smaller screen
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

// the menu for desktop view ,  it is a ul
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// the Menu has many li
export const NavItem = styled.li`
  height: 80px;
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
  &:active {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f8971d;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: all 0.5s ease-in-out;
    background: #f8971d;
    color: #000000;
    transform: scale(1.2);
  }
`;
