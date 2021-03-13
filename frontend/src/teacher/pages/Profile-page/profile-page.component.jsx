//libraries used
import React from 'react';

import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';

import EditProfileContainer from '../../components/edit-profile/edit-profile.container';

//styles used
import {
  PageContainer,
  CafeDetailsParentWrapper,
  Container,
  EditProfileWrapper,
  Title,
  ChangePasswordWrapper,
  PageWrapper,
} from './profile-page.styles';
import ChangePasswordContainer from '../../components/change-password/change-password.container';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PageContainer>
        <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          <Container>
            <EditProfileWrapper>
              <Title>Edit Profile</Title>
              <EditProfileContainer />
            </EditProfileWrapper>
            <ChangePasswordWrapper>
              <Title>Change Password</Title>
              <ChangePasswordContainer />
            </ChangePasswordWrapper>
          </Container>
          </PageWrapper>
        </PageContainer>
      </>
    );
  }
}

export default Profile;
