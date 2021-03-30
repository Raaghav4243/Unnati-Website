import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { websiteTheme } from './material-ui.styles';
import './App.css';

import HomePage from './student/pages/homepage/homepage.component';
import CourseOverview from './student/pages/course-overview/course-overview.component';
import StudentPage from './student/pages/student-page/student-page.component';

import TeacherPage from './teacher/pages/teacher-page/teacher-page.component';
import SignInAndSignUpPage from './student/pages/signup-and-signin-page/signup-and-signin-page.component';

import {
  // selectCurrentUserId,
  selectCurrentUserRole,
  selectDidUserSignInFail,
  selectIsUserSignedIn,
} from './student/redux/user/user.selectors';
import { checkUserSession } from './student/redux/user/user.actions';
// import { Button } from '@material-ui/core';
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
        isLoggedIn && userType === 'STUDENT' ? (
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
        isLoggedIn && userType === 'TEACHER' ? (
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
    // console.log('APP.JS HAS MOUNTED.');
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
    // console.log('APP.JS HAS RENDERED.');
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
                    <Redirect to='/teacher/dashboard' />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
            <PrivateStudentRoute path='/student' component={StudentPage} />
            <PrivateTeacherRoute path='/teacher' component={TeacherPage} />
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
