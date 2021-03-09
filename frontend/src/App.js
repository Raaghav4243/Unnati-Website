import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { websiteTheme } from './material-ui.styles';
import './App.css';
// import AssignmentPage from './student/pages/assignment-page/assignment-page.component';

import HomePage from './student/pages/homepage/homepage.component';
import CourseOverview from './student/pages/course-overview/course-overview.component';
import StudentPage from './student/pages/student-page/student-page.component';
// import FeesPage from './student/pages/FeesPage/App';

import Profile from './student/pages/Profile-page/profile-page.component';
import TestPage from './student/pages/test-page/test-page.component';
import cafeteacher from './teacher/pages/teacher-enrolledstudent/teacher-enrolledstudent';
import SignInAndSignUpPage from './student/pages/signup-and-signin-page/signup-and-signin-page.component';

import TeacherDashboardAssignPage from './teacher/pages/assign-courses/assign-courses';
import TeacherDashboardFeesPage from './teacher/pages/course-fees/course-fees-page';

import TeacherEnrolledStudents from './teacher/pages/teacher-enrolledstudent/teacher-enrolledstudent';
import TeacherApproval from './teacher/pages/teacher-approval/teacher-approval.page';
import TeacherTestCheck from './teacher/pages/teacher-testCheck/teacher-test-check.page';
import TeacherProfile from './teacher/pages/Profile-page/profile-page.component';
import TeacherChangePassword from './teacher/pages/change-password/change-password';
import EvaluateTestPage from './teacher/pages/evaluate-test-page/evaluate-test';
import TeacherDashboardLandingPage from './teacher/pages/teacher-dashboard-main-page/teacher-dashboard-page';
import {
  selectCurrentUserId,
  selectCurrentUserRole,
  selectDidUserSignInFail,
  selectIsUserSignedIn,
} from './student/redux/user/user.selectors';
import { checkUserSession } from './student/redux/user/user.actions';
import { Button } from '@material-ui/core';
import {
  fetchAllCafesStart,
  fetchAllCoursesStart,
} from './student/redux/allCourses/all-courses.actions';
// import StyledButton from './teacher/components/styled-button-component/styled-button'
// import demo from './teacher/pages/demo';

const PrivateStudentRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = !!localStorage.getItem('token');
  let userData = localStorage.getItem('user');
  userData = JSON.parse(userData);
  let userType = userData ? userData.role : null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && userType == 'STUDENT' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signup', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const PrivateTeacherRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = !!localStorage.getItem('token');
  let userData = localStorage.getItem('user');
  userData = JSON.parse(userData);
  let userType = userData ? userData.role : null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && userType == 'TEACHER' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signup', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    console.log('APP.JS HAS MOUNTED.');
    const {
      checkUserSession,
      fetchAllCoursesStart,
      fetchAllCafesStart,
    } = this.props;
    checkUserSession();
    fetchAllCoursesStart();
    fetchAllCafesStart();
  }

  render() {
    console.log('APP.JS HAS RENDERED.');
    const { isUserSignedIn, userRole } = this.props;
    return (
      <BrowserRouter>
        <ThemeProvider theme={websiteTheme}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route
              path='/discover'
              exact
              render={() => <CourseOverview forHome />}
            />
            <Route
              path='/signup'
              render={() =>
                isUserSignedIn ? (
                  userRole === 'STUDENT' ? (
                    <Redirect to='/student/dashboard' />
                  ) : userRole === 'TEACHER' ? (
                    <Redirect to='/teacher' />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
            {/* STUDENT ROUTES */}
            {/* <Route
              path='/student'
              // component={StudentPage}
              render={() =>
                isUserSignedIn && userRole === 'STUDENT' ? (
                  <StudentPage />
                ) : (
                  <Redirect to='/' />
                )
              }
            /> */}
            <PrivateStudentRoute path='/student' component={StudentPage} />

            <Route
              path='/teacher'
              exact
              component={TeacherDashboardLandingPage}
            />
            <Route
              path='/teacher/enrolled'
              exact
              component={TeacherEnrolledStudents}
            />
            <Route path='/teacher/approve' exact component={TeacherApproval} />
            <Route
              path='/teacher/testcheck'
              exact
              component={TeacherTestCheck}
            />
            <Route
              path='/teacher/assign'
              exact
              component={TeacherDashboardAssignPage}
            />
            <Route
              path='/teacher/studentfees'
              exact
              component={TeacherDashboardFeesPage}
            />
            <Route path='/teacher/profile' exact component={TeacherProfile} />
            <Route
              path='/teacher/changepassword'
              exact
              component={TeacherChangePassword}
            />
            <Route path='/teacher/evaluatetest' component={EvaluateTestPage} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path='/' exact component={HomePage} />
//         <Route path='/student' component={StudentPage} />
//         <Route path='/test' component={FeesPage} />
//         <Route path='/teacher' component={TeacherDashboard} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

const mapStateToProps = createStructuredSelector({
  isUserSignedIn: selectIsUserSignedIn,
  userRole: selectCurrentUserRole,
  didUserSignInFail: selectDidUserSignInFail,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
  fetchAllCafesStart: () => dispatch(fetchAllCafesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
