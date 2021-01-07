import React from 'react';
import GoToHomePageButton from '../go-to-homepage-button-link/go-to-homepage-button-link.component';

import {
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
} from './student-dashboard-navbar.styles';

const StudentDashboardNavbar = () => {
  return (
    <NavbarContainer>
      <GoToHomePageButton />
    </NavbarContainer>
  );
};

export default StudentDashboardNavbar;
