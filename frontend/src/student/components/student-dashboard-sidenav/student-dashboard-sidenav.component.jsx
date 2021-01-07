import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//redux used
import {
  selectCurrentUser,
  selectCurrentUserFirstName,
  selectCurrentUserLastName,
} from '../../redux/user/user.selectors';

// import { ReactComponent as ProfilePhoto } from '../../icons/profile-user.svg';
import { ReactComponent as ProfilePhoto } from '../../icons/male-icon.svg';
import {
  Container,
  PictureContainer,
  Profile,
  UserPrompt,
  ProfileTitle,
  SidenavLink,
  SignOutButton,
  Dashboard,
  DashboardTitle,
} from './student-dashboard-sidenav.styles';

class StudentDashboardSidenav extends React.Component {
  constructor() {
    super();
  }

  handleSignOut = () => {
    console.log('User wants to sign out');
  };

  render() {
    const { match, user, firstName, lastName } = this.props;
    return (
      <>
        <Container>
          <PictureContainer>
            <ProfilePhoto style={{ height: '40%', width: '40%' }} />
            <UserPrompt>Hi, {firstName}</UserPrompt>
          </PictureContainer>
          <Profile>
            <ProfileTitle>Profile</ProfileTitle>
            <SidenavLink to={`${match.path}/profile`}>
              Update Profile Info
            </SidenavLink>
            <SidenavLink to={`${match.path}/password`}>
              Change Password
            </SidenavLink>
            <SidenavLink to={`${match.path}/fees`}>Fees</SidenavLink>
            <SignOutButton onClick={this.handleSignOut}>Sign Out</SignOutButton>
          </Profile>
          <Dashboard>
            <DashboardTitle>Dashboard</DashboardTitle>
            <SidenavLink to={`${match.path}`}>View Dashboard</SidenavLink>
          </Dashboard>
        </Container>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  firstName: selectCurrentUserFirstName,
  lastName: selectCurrentUserLastName,
});

export default connect(mapStateToProps)(withRouter(StudentDashboardSidenav));
