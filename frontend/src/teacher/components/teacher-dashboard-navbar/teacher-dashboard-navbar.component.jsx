import React from 'react';
import GoToHomePageButton from '../go-to-homepage-button-link/go-to-homepage-button-link.component';

import {
  NavbarContainer,
} from './teacher-dashboard-navbar.styles';

const TeacherDashboardNavbar = () => {
  return (
    <NavbarContainer>
      <GoToHomePageButton />
    </NavbarContainer>
  );
};

export default TeacherDashboardNavbar;
