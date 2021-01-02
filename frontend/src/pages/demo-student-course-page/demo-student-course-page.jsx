import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCourseTopics } from '../../redux/course-topic/course-topic.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.actions';

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
    const { course_id, topics } = this.props;
    return <div>TOPICS ARE : </div>;
  }
}

const mapStateToProps = createStructuredSelector({
  user_id: selectCurrentUserId,
  topics: selectCourseTopics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourseTopicsStart: (user_id, course_id) =>
    dispatch(fetchCourseTopicsStart(user_id, course_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentCoursePage);
