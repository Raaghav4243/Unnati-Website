import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// import { selectCurrentUserId } from '../../redux/user/user.selectors';
// import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.actions';
// import {
//   selectCurrentCourseId,
//   selectCurrentCourseTopicId,
//   selectCurrentCourseTopicType,
// } from '../../redux/student/student.selectors';
import { selectAssignmentId } from '../../redux/assignment-page/assignment-page.selectors';
import { selectTestId } from '../../redux/testpage/testpage.selectors.js';

import CourseSideNav from '../../components/course-sidenav/course-sidenav.components';
import CourseContentPage from '../course-content-page/course-content-page.component';
import CourseVideo from '../course-video/course-video-page.component';
import AssignmentPage from '../assignment-page/assignment-page.component';
// import TestPage from '../test-page/test-page.component';
import TestStartPage from '../test-start-page/test-start-page.component';
import CourseNavbar from '../../components/course-navbar/course-navbar.component';
import TestPage from '../test-page/test-page.component';
//import demoAssignment from '../demo-assignment';

import { Container } from './student-course-topic-page.styles';

const PrivateAssignmentRoute = ({
  component: Component,
  isAssignmentLoaded: isAssignmentLoaded,
  ...rest
}) => {
  // Add your own authentication on the below line.
  // const isLoggedIn = !!localStorage.getItem('token');
  // let userData = localStorage.getItem('user');
  // userData = JSON.parse(userData);
  // let userType = userData ? userData.role : null;
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log('PROPS LOCATION IS :', props.location);
        return isAssignmentLoaded ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/student/course',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

const PrivateTestRoute = ({
  component: Component,
  isTestLoaded: isTestLoaded,
  ...rest
}) => {
  // Add your own authentication on the below line.
  // const isLoggedIn = !!localStorage.getItem('token');
  // let userData = localStorage.getItem('user');
  // userData = JSON.parse(userData);
  // let userType = userData ? userData.role : null;
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log('PROPS LOCATION IS :', props.location);
        return isTestLoaded ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/student/course',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

class StudentCourseTopicPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { match, currentAssignmentId, currentTestId } = this.props;
    // console.log('match is', match, 'topic id is', course_topic_id);
    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          render={() => {
            return (
              <>
                <Container>
                  <CourseNavbar />
                  <CourseSideNav />
                  <CourseContentPage />
                </Container>
              </>
            );
          }}
        />
        <PrivateAssignmentRoute
          path={`${match.path}/assignment`}
          exact
          component={AssignmentPage}
          isAssignmentLoaded={currentAssignmentId}
        />
        <PrivateTestRoute
          path={`${match.path}/test`}
          exact
          component={TestPage}
          isTestLoaded={currentTestId}
        />
        {/* <Route
          exact
          path={`${match.path}/assignment`}
          render={() => {
            return (
              <>
                <AssignmentPage />
              </>
            );
          }}
        /> */}
        {/* <Route
          exact
          path={`${match.path}/test`}
          render={() => {
            return (
              <>
                <TestPage />
              </>
            );
          }}
        /> */}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentAssignmentId: selectAssignmentId,
  currentTestId: selectTestId,
});

export default connect(mapStateToProps, null)(StudentCourseTopicPage);
