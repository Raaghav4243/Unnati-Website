import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentCourseId } from '../../redux/student/student.selectors';

import { selectCurrentUserId } from '../../redux/user/user.selectors';

import { fetchTestStart } from '../../redux/testpage/testpage.actions';

import {
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';

import {
  selectTestMessage,
  selectTestQuestions,
} from '../../redux/testpage/testpage.selectors';

//components used
import {
  TestStartPageContainer,
  TestTitle,
  QuestionsPromptContainer,
  Prompt,
  StartTestButton,
} from './test-start-page.styles';
import TestPage from '../test-page/test-page.component';

class TestStartPage extends React.Component {
  constructor() {
    super();
  }
  componentDidUpdate() {
    console.log('Test start page did update!');
  }
  componentDidMount() {
    const {
      current_user_id,
      current_course_id,
      current_test_id,
      fetchTestStart,
    } = this.props;
    console.log('TestStartPage mounted');
    // fetchTestStart(current_user_id, current_course_id, current_test_id);
  }

  componentWillUnmount() {
    console.log('TestStartPage Will unmount now');
  }

  // componentDidUpdate() {
  //   const {
  //     current_user_id,
  //     current_course_id,
  //     current_test_id,
  //     fetchTestStart,
  //   } = this.props;
  //   console.log('When test updated');
  //   fetchTestStart(current_user_id, current_course_id, current_test_id);
  // }
  render() {
    console.log('Test start page rendered!');
    const {
      current_test_name,
      current_user_id,
      current_course_id,
      current_test_id,
      test_questions,
      test_message,
      match,
      history,
    } = this.props;
    return (
      <>
        <TestStartPageContainer>
          {/* Do you want to start this test? : {current_test_name}
            {current_user_id}
            Course:
            {current_course_id}
            Test:
            {current_test_id}
            {test_message ? (
              <div> Message from backend {test_message}</div>
            ) : test_questions ? (
              <>
                <div>Questions Received</div>
                <TestPage />
              </>
            ) : null} */}
          {test_message ? (
            <div>MESSAGE RECEIVED {test_message}</div>
          ) : test_questions ? (
            <>
              {/* <Route path={`${match.path}/test`} component={TestPage} /> */}
              {console.log('QUESTIONS ARRAY:', test_questions)}
              <QuestionsPromptContainer>
                <Prompt>
                  Are you sure you want to start this test? Once Started, it
                  cannot be paused without submission.
                </Prompt>
                <StartTestButton
                  onClick={() => {
                    history.push(`${match.path}/test`);
                  }}
                >
                  Start Test
                </StartTestButton>
              </QuestionsPromptContainer>
            </>
          ) : (
            <div>WE ARE FINDING YOUR TEST... </div>
          )}
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
  test_questions: selectTestQuestions,
  test_message: selectTestMessage,
});

export default connect(mapStateToProps)(withRouter(TestStartPage));
