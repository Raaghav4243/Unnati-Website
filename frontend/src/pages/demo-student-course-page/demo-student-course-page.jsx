import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCompletedCourseTopicsId, selectCourseTopics } from '../../redux/course-topic/course-topic.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.actions';
//import demoAssignment from '../demo-assignment';

class StudentCoursePage extends React.Component {
  constructor() {
    super();

    this.state = {
      current_topic: 0,
    };
  }

  componentDidMount() {
    const { user_id, course_id, fetchCourseTopicsStart } = this.props;
    // console.log('user_id recieved is ' + user_id);
    fetchCourseTopicsStart(user_id, course_id);
  }

  render() {
    const { course_id, topics, attemptedTopicId } = this.props;
    console.log(attemptedTopicId)
    return (
    <div>TOPICS ARE :
    
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user_id: selectCurrentUserId,
  topics: selectCourseTopics,
  attemptedTopicId: selectCompletedCourseTopicsId
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourseTopicsStart: (user_id, course_id) =>
    dispatch(fetchCourseTopicsStart(user_id, course_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentCoursePage);
