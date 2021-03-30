import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//redux used
import {
  selectCurrentUserId,
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
} from './student-dashboard-sidenav.styles';
import { signOutStart } from '../../redux/user/user.actions';

class StudentDashboardSidenav extends React.Component {
  // constructor() {
  //   super();
  // }

  handleSignOut = () => {
    const { signOutStart, isUserSignedIn, history } = this.props;
    // console.log('User wants to sign out');
    signOutStart();

    if (isUserSignedIn) {
    } else {
      // console.log('USER HAS SIGNED OUT SO NOW GO BACK TO HOMEPAGE');

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
  user: selectCurrentUserId,
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
)(withRouter(StudentDashboardSidenav));
