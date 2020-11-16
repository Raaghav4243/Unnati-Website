import styled from 'styled-components';
import { Link, Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #ffd200;
  height: 80px;
  display: flex;
  justify-content: center; // column wise centered
  align-items: center; // row wise centered
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1400px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    /* right:0; this is for having hamburger at right*/
    /* This is for left */
    left: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavTitle = styled(LinkR)`
  color: #000;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLink = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f8971d;
  /* white-space: nowrap; */
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
    color: #000;
    transform: scale(1.2);
  }
`;
