import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Transition = styled.div``;

export const Nav = styled.div`
  /* background: #ffffff; */
  /* background-color: #f8971d; */
  /* background-color: #000; */
  background: transparent;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  width: 100%;
  position: fixed !important;
  top: 0;
  z-index: 9999;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07); */

  &.scroll {
    background-color: #fff;
    /* visibility: visible; */
    transition: all 200ms ease-in-out;
    color: black;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1450px;
`;
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
export const NavLogo = styled(LinkS)`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.p``;
export const NavMenu = styled.div``;
export const NavItem = styled.div``;
export const NavLink = styled(LinkS)``;
export const NavbarRight = styled.div``;
