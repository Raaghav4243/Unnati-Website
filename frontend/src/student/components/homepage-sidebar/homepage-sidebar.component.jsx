import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './homepage-sidebar.styles';

const HomepageSidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to='courses' onClick={toggle}>
            Courses
          </SidebarLink>
          {/* <SidebarLink to='signup' onClick={toggle}>
            Sign Up
          </SidebarLink> */}
          <SidebarLink to='contact' onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signup'>Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default HomepageSidebar;
