import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectCompletedCourseTopicsId,
  selectCourseTopics,
} from '../../redux/course-topic/course-topic.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.actions';
import CourseSideNav from '../../components/course-sidenav/course-sidenav.components';
import { selectCurrentCourseId } from '../../redux/student/student.selectors';
//import demoAssignment from '../demo-assignment';

class StudentCourseTopicPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { user_id, course_id, fetchCourseTopicsStart } = this.props;
    console.log('user id is ', user_id, 'course_id is', course_id);
    fetchCourseTopicsStart(user_id, course_id);
  }
  render() {
    const { course_id, topics, attemptedTopicsId, match } = this.props;
    console.log('match is', match);
    // console.log('topics are', topics);
    return (
      <>
        <CourseSideNav />
      </>
      // <>

      //   <div>Course sidenav</div>
      //   <span>Course_id is : {course_id}</span>
      //   {/* <CourseSideNav /> */}
      // </>
      // <Route path={`${match.path}`} render={() => <CourseSideNav />} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user_id: selectCurrentUserId,
  course_id: selectCurrentCourseId,
  topics: selectCourseTopics,
  attemptedTopicsId: selectCompletedCourseTopicsId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourseTopicsStart: (user_id, course_id) =>
    dispatch(fetchCourseTopicsStart(user_id, course_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCourseTopicPage);
