//libraries used
import React from 'react';

import StudentCafeDetails from '../../components/cafe-details/cafe-details.component';

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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <PageContainer>
          <CafeDetailsParentWrapper>
            <StudentCafeDetails />
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
