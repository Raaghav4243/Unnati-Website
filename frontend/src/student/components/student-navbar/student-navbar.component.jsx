import React from 'react';

import {
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
} from './student-navbar.styles';

const StudentNavbar = () => {
  return (
    <NavbarContainer>
      <h1>NAVBAR</h1>
      <NavbarLeft></NavbarLeft>
      <NavbarRight></NavbarRight>
    </NavbarContainer>
  );
};

export default StudentNavbar;
