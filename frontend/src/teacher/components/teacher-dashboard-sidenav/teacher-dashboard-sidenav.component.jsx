import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// import StyledButton from '../button-component/styled-button';

import {
  selectCurrentUser,
  selectCurrentUserFirstName,
  selectCurrentUserLastName,
  selectIsUserSignedIn,
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
} from './teacher-dashboard-sidenav.styles';
import { signOutStart } from '../../redux/user/user.actions';

class TeacherDashboardSidenav extends React.Component {


  handleSignOut = () => {
    const { signOutStart, isUserSignedIn, history } = this.props;
    signOutStart();

    if (isUserSignedIn) {
    } else {
      // <Route path='/' />;
      history.push('/');
    }
  };

  render() {
    const { match, firstName } = this.props;
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
            <SidenavLink to={`${match.path}/profile`}>
              Change Password
            </SidenavLink>
            <SignOutButton onClick={this.handleSignOut}>Sign Out</SignOutButton>
            {/* <StyledButton onClick={this.handleSignOut}>Sign Out</StyledButton> */}
          </Profile>
          <Dashboard>
            <DashboardTitle>Dashboard</DashboardTitle>
            <SidenavLink to={`${match.path}`}>View Dashboard</SidenavLink>
            <SidenavLink to={`${match.path}/enrolled`}>
              Enrolled Students
            </SidenavLink>
            <SidenavLink to={`${match.path}/approve`}>
              Approve Student
            </SidenavLink>
            <SidenavLink to={`${match.path}/testcheck`}>
              Evaluate Tests
            </SidenavLink>
            <SidenavLink to={`${match.path}/assign`}>
              Assign Course to Student
            </SidenavLink>
            <SidenavLink to={`${match.path}/studentfees`}>
              Enter Fee for Student
            </SidenavLink>
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
  isUserSignedIn: selectIsUserSignedIn,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TeacherDashboardSidenav));
