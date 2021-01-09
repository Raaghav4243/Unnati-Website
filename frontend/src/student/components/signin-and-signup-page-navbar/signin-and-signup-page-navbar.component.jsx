import React from 'react';
import GoToHomePageButton from '../go-to-homepage-button-link/go-to-homepage-button-link.component';

import { NavbarContainer } from './signin-and-signup-page-navbar.styles';

const SignInPageNavbar = () => {
  return (
    <NavbarContainer>
      <GoToHomePageButton />
    </NavbarContainer>
  );
};

export default SignInPageNavbar;
