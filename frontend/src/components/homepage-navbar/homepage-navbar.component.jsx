//libraries used
import React from 'react';
//redux used
//components used
import SignInButton from '../sign-in-button-link/sign-in-button-link.component';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as UnnatiLogo } from '../../icons/UnnatiTree.svg';
//styles used

const HomePageNavbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMiddle>
            <NavLogo>
              <UnnatiLogo />
              <NavTitle>UNNATI</NavTitle>
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Courses</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarMiddle>
          <NavbarRight>
            {user ? (
              <div>
                <GoToDashboardBtnLink>Go to Dashboard</GoToDashboardBtnLink>
                <SignOut />
              </div>
            ) : (
              <SignInButton />
            )}
          </NavbarRight>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default homePageNavbar;
