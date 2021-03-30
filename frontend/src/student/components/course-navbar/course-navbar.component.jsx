import React from 'react';
import GoToDashboardButton from '../go-to-dashboard-button-link/go-to-dashboard-button-link.component';
import GoToHomePageButton from '../go-to-homepage-button-link/go-to-homepage-button-link.component';

import {
  Nav,
  DashboardButtonWrapper,
  // HomepageButtonWrapper,
} from './course-navbar.styles';

const CourseNavbar = () => {
  return (
    <>
      <Nav>
        <DashboardButtonWrapper>
          <GoToDashboardButton />
        </DashboardButtonWrapper>
        {/* <HomepageButtonWrapper> */}
        <GoToHomePageButton />
        {/* </HomepageButtonWrapper> */}
      </Nav>
    </>
  );
};

export default CourseNavbar;
