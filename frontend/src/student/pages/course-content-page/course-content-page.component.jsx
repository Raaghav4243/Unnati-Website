import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUserId } from '../../redux/user/user.selectors';

import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicType,
} from '../../redux/student/student.selectors';

import CourseVideo from '../course-video/course-video-page.component';
import AssignmentPage from '../assignment-page/assignment-page.component';
import TestStartPage from '../test-start-page/test-start-page.component';

import { fetchTestStart } from '../../redux/testpage/testpage.actions';
import { fetchAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';
import { fetchLectureStart } from '../../redux/lecture-page/lecture-page.actions';

import { PageWrapper } from './course-content-page.styles';

class CourseContentPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log('Course content page did mount.');
  }

  componentWillUnmount() {
    console.log('Course content page will unmount now');
  }

  componentDidUpdate() {
    console.log('Course content page did update!');
    const {
      user_id,
      course_id,
      course_topic_id,
      course_topic_type,
      fetchTestStart,
      fetchAssignmentStart,
      fetchLectureStart,
    } = this.props;
    // course_topic_type === 'LECTURE'
    //   ? //   ? fetchLectureStart(user_id, course_id, course_topic_id)
    //     null
    //   : course_topic_type === 'ASSIGNMENT'
    //   ? //   ? fetchAssignmentStart(user_id, course_id, course_topic_id)
    //     null
    //   : course_topic_type === 'TEST'
    //   ? fetchTestStart(user_id, course_id, course_topic_id)
    //   : null;

    // course_topic_type === 'ASSIGNMENT'
    //   ? fetchAssignmentStart(user_id, course_id, course_topic_id)
    //   : null;
    if (course_topic_type === 'LECTURE') {
      fetchLectureStart(user_id, course_id, course_topic_id);
    } else if (course_topic_type === 'ASSIGNMENT') {
      fetchAssignmentStart(user_id, course_id, course_topic_id);
    } else if (course_topic_type === 'TEST') {
      fetchTestStart(user_id, course_id, course_topic_id);
    }

    // fetchTestStart(user_id, course_id, course_topic_id);
  }

  render() {
    console.log('CourseContentPage rendered');
    const { course_topic_type } = this.props;
    return (
      <>
        <PageWrapper>
          {course_topic_type === 'LECTURE' ? (
            <CourseVideo />
          ) : course_topic_type === 'ASSIGNMENT' ? (
            <AssignmentPage />
          ) : course_topic_type === 'TEST' ? (
            <TestStartPage />
          ) : (
            <div>SELECT A TOPIC</div>
          )}
          {/* <Route exact path={`${match.path}/test`} component={TestPage} />
           */}
        </PageWrapper>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user_id: selectCurrentUserId,
  course_id: selectCurrentCourseId,
  course_topic_id: selectCurrentCourseTopicId,
  course_topic_type: selectCurrentCourseTopicType,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTestStart: (user_id, course_id, test_id) =>
    dispatch(fetchTestStart(user_id, course_id, test_id)),
  fetchAssignmentStart: (user_id, course_id, assignment_id) =>
    dispatch(fetchAssignmentStart(user_id, course_id, assignment_id)),
  fetchLectureStart: (user_id, course_id, lecture_id) =>
    dispatch(fetchLectureStart(user_id, course_id, lecture_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CourseContentPage);
