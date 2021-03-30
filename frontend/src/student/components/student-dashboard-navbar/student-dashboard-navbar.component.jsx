import React from 'react';
import GoToHomePageButton from '../go-to-homepage-button-link/go-to-homepage-button-link.component';

import { NavbarContainer } from './student-dashboard-navbar.styles';

const StudentDashboardNavbar = ({ forTest }) => {
  return (
    <NavbarContainer>
      <GoToHomePageButton forTest={forTest} />
    </NavbarContainer>
  );
};

export default StudentDashboardNavbar;
