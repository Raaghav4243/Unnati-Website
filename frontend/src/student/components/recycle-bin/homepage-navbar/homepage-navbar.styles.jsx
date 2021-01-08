import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Transition = styled.div``;

export const Nav = styled.div`
  /* background: transparent; */
  background-color: #000;

  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  /* border: 1px solid red; */
  width: 100%;
  position: fixed !important;
  top: 0;
  z-index: 9999;
  transition: all 350ms ease-in-out;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07); */

  &.scroll {
    background-color: #fff;
    /* background-color: rgba(0, 0, 0, 0.6); */
    /* background-color: #000; */

    /* visibility: visible; */
    transition: all 350ms ease-in-out;
    color: black;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
    border: 0;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;

  @media screen and (max-width: 425px) {
    /* font-size: 20px; */
    padding: 0 10px;
  }
`;
export const MobileIconSideNav = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
    font-size: 20px;
    /* border: 1px solid pink; */
  }
`;
export const NavbarMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  /* border: 1px solid blue; */

  @media screen and (max-width: 768px) {
    /* padding-left: 50px; */
    justify-content: center;
    width: 65%;
  }
`;
export const NavLogo = styled(LinkS)`
  height: 90%;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* border: 1px solid yellow; */
  width: 225px;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 10px;
    font-size: 0.75rem;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  padding: 0.25rem;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid yellow; */
  border-radius: 10px;
  background-color: #fff;
`;

export const NavTitle = styled.p`
  color: #fff;
  font-weight: bolder;
  font-size: 1.5rem;
  margin: 0 0.5rem;

  &.scroll {
    color: #000;
    transition: all 200ms ease-in-out;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  /* border: 1px solid orange; */
  height: 100%;

  /* width: 600px; */
  /* padding-left: 20px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  /* border: 1px solid pink; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 70%; */
  width: 120px;
  min-width: 80px;
`;
export const NavLink = styled(LinkS)`
  cursor: pointer;
  /* height: 100%; */
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &.active {
    border-bottom: 2px solid orange;
    /* color: orange; */
    font-weight: bolder;
    /* text-decoration: underline; */
    transition: all 200ms ease;
  }

  &.scroll {
    &.active {
      color: orange;
    }
    color: #000;
    transition: all 200ms ease-in-out;
  }
`;
export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
`;
