import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentCourseId } from '../../redux/student/student.selectors';

import { selectCurrentUserId } from '../../redux/user/user.selectors';

import { fetchTestStart } from '../../redux/testpage/testpage.actions';

import {
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';

import { TestStartPageContainer, TestTitle } from './test-start-page.styles';

class TestStartPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const {
      current_user_id,
      current_course_id,
      current_test_id,
      fetchTestStart,
    } = this.props;
    console.log('When mounted');
    fetchTestStart(current_user_id, current_course_id, current_test_id);
  }

  // componentWillUnmount() {
  //   console.log(' TestStartPage Will unmount now');
  // }

  componentDidUpdate() {
    const {
      current_user_id,
      current_course_id,
      current_test_id,
      fetchTestStart,
    } = this.props;
    console.log('When test updated');
    fetchTestStart(current_user_id, current_course_id, current_test_id);
  }
  render() {
    const {
      current_test_name,
      current_user_id,
      current_course_id,
      current_test_id,
    } = this.props;
    return (
      <>
        <TestStartPageContainer>
          <TestTitle>
            Do you want to start this test? : {current_test_name}
            {current_user_id}
            Course:
            {current_course_id}
            Test:
            {current_test_id}
          </TestTitle>
        </TestStartPageContainer>
      </>
    );
  }
  // ({ current_test_name }) => {
}

const mapStateToProps = createStructuredSelector({
  current_test_id: selectCurrentCourseTopicId,
  current_test_name: selectCurrentCourseTopicName,
  current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTestStart: (user_id, course_id, test_id) =>
    dispatch(fetchTestStart(user_id, course_id, test_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestStartPage);
