import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//redux used
// import {
//   selectCurrentUser,
//   selectCurrentUserFirstName,
//   selectCurrentUserLastName,
// } from '../../redux/user/user.selectors';

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

class TeacherDashboardSidenav extends React.Component {
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
            <SidenavLink to={`/profile`}>
              Update Profile Info
            </SidenavLink>
            <SidenavLink to={`/password`}>
              Change Password
            </SidenavLink>
            <SignOutButton onClick={this.handleSignOut}>Sign Out</SignOutButton>
          </Profile>
          <Dashboard>
            <DashboardTitle>Dashboard</DashboardTitle>
            <SidenavLink to={`/`}>View Dashboard</SidenavLink>
            <SidenavLink to={`/teacher/enrolled`}>Enrolled Students</SidenavLink>
            <SidenavLink to={`/approvestudents`}>Approve Student Course</SidenavLink>
            <SidenavLink to={`/teacher/assign`}>Assign Course to Student</SidenavLink>
            <SidenavLink to={`/studentfees`}>Enter Fee for Student</SidenavLink>
            <SidenavLink to={`/evaluate`}>Evaluate Tests</SidenavLink>
          </Dashboard>
        </Container>
      </>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   user: selectCurrentUser,
//   firstName: selectCurrentUserFirstName,
//   lastName: selectCurrentUserLastName,
// });

export default TeacherDashboardSidenav;
