import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.actions';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicType,
} from '../../redux/student/student.selectors';

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

class StudentCourseTopicPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { match } = this.props;
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
        <Route
          exact
          path={`${match.path}/assignment`}
          render={() => {
            return (
              <>
                <AssignmentPage />
              </>
            );
          }}
        />
        <Route
          exact
          path={`${match.path}/test`}
          render={() => {
            return (
              <>
                <TestPage />
              </>
            );
          }}
        />
      </>
    );
  }
}

export default StudentCourseTopicPage;
