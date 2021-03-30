import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUserId } from '../../redux/user/user.selectors';

import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicType,
} from '../../redux/student/student.selectors';

import { fetchTestStart } from '../../redux/testpage/testpage.actions';
import { fetchAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';
import { fetchLectureStart } from '../../redux/lecture-page/lecture-page.actions';

import CourseVideoPageContainer from '../course-video/course-video-page.container';

import {
  PageWrapper,
  SelectTopicWrapper,
  LogoWrapper,
  ChooseTopicLogo,
  Title,
} from './course-content-page.styles';
import AssignmentStartPageContainer from '../assignment-start-page/assignment-start-page.container';
import TestStartPageContainer from '../test-start-page/test-start-page.container';

class CourseContentPage extends React.Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    const {
      course_topic_type,
      fetchTestStart,
      fetchAssignmentStart,
      fetchLectureStart,
    } = this.props;

    console.log('Course content page did mount.');
    if (!course_topic_type) {
      return;
    }
    if (course_topic_type === 'LECTURE') {
      // fetchLectureStart(user_id, course_id, course_topic_id);
      fetchLectureStart();
    } else if (course_topic_type === 'ASSIGNMENT') {
      console.log('ASSIGNMENT STARTED FETCHING FROM COURSE CONTENT PAGE');
      // fetchAssignmentStart(user_id, course_id, course_topic_id);
      fetchAssignmentStart();
    } else if (course_topic_type === 'TEST') {
      fetchTestStart();
    }
  }

  componentWillUnmount() {
    console.log('Course content page will unmount now');
  }

  componentDidUpdate() {
    console.log('Course content page did update!');
    const {
      course_topic_type,
      fetchTestStart,
      fetchAssignmentStart,
      fetchLectureStart,
    } = this.props;

    if (course_topic_type === 'LECTURE') {
      // fetchLectureStart(user_id, course_id, course_topic_id);
      fetchLectureStart();
    } else if (course_topic_type === 'ASSIGNMENT') {
      console.log('ASSIGNMENT STARTED FETCHING FROM COURSE CONTENT PAGE');
      // fetchAssignmentStart(user_id, course_id, course_topic_id);
      fetchAssignmentStart();
    } else if (course_topic_type === 'TEST') {
      fetchTestStart();
    }
  }

  render() {
    console.log('CourseContentPage rendered');
    const { course_topic_type } = this.props;
    return (
      <>
        <PageWrapper>
          {course_topic_type === 'LECTURE' ? (
            <CourseVideoPageContainer />
          ) : course_topic_type === 'ASSIGNMENT' ? (
            <AssignmentStartPageContainer />
          ) : course_topic_type === 'TEST' ? (
            <TestStartPageContainer />
          ) : (
            <>
              {/* <div>SELECT A TOPIC</div> */}
              <SelectTopicWrapper>
                <LogoWrapper>
                  <ChooseTopicLogo style={{ height: '80px' }} />
                </LogoWrapper>
                <Title>
                  Nothing to show, click on topic to expand and select the
                  content
                </Title>
              </SelectTopicWrapper>
            </>
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
  fetchTestStart: () => dispatch(fetchTestStart()),
  fetchAssignmentStart: () => dispatch(fetchAssignmentStart()),
  fetchLectureStart: () => dispatch(fetchLectureStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CourseContentPage);
