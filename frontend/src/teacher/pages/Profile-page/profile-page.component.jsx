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
} from './profile-page.styles';
import ChangePasswordContainer from '../../components/change-password/change-password.container';

class Profile extends React.Component {
  render() {
    return (
      <>
        <PageContainer>
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
        </PageContainer>
      </>
    );
  }
}

export default Profile;
