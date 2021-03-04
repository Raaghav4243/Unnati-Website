import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// import StyledButton from '../button-component/styled-button';


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
} from './teacher-dashboard-sidenav.styles';
import {signOutStart} from '../../../student/redux/user/user.actions'
import {selectIsUserSignedIn} from '../../../student/redux/user/user.selectors'

class TeacherDashboardSidenav extends React.Component {
  constructor() {
    super();
  }

  handleSignOut = () => {
    const { signOutStart, isUserSignedIn, history } = this.props;
    signOutStart();

    if (isUserSignedIn) {
    } else {
      history.push('/');
    }
  };

  render() {
    const {firstName} = this.props;
    return (
      <>
        <Container>
          <PictureContainer>
            <ProfilePhoto style={{ height: '40%', width: '40%' }} />
            <UserPrompt>Hi, {firstName}</UserPrompt>
          </PictureContainer>
          <Profile>
            <ProfileTitle>Profile</ProfileTitle>
            <SidenavLink to={`/teacher/profile`}>
              Update Profile Info
            </SidenavLink>
            <SidenavLink to={`/teacher/changepassword`}>
              Change Password
            </SidenavLink>
            <SignOutButton onClick={this.handleSignOut}>Sign Out</SignOutButton>
            {/* <StyledButton onClick={this.handleSignOut}>Sign Out</StyledButton> */}
          </Profile>
          <Dashboard>
            <DashboardTitle>Dashboard</DashboardTitle>
            <SidenavLink to={`/teacher`}>View Dashboard</SidenavLink>
            <SidenavLink to={`/teacher/enrolled`}>Enrolled Students</SidenavLink>
            <SidenavLink to={`/teacher/approve`}>Approve Student</SidenavLink>
            <SidenavLink to={`/teacher/testcheck`}>Evaluate Tests</SidenavLink>
            <SidenavLink to={`/teacher/assign`}>Assign Course to Student</SidenavLink>
            <SidenavLink to={`/teacher/studentfees`}>Enter Fee for Student</SidenavLink>
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
  isUserSignedIn: selectIsUserSignedIn
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TeacherDashboardSidenav));
