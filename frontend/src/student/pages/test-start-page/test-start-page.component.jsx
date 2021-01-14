import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectTestMessageFromBackend,
  selectTestQuestions,
  selectTestDuration,
  selectTestMaxMarksPossible,
  selectTestMarksScored,
} from '../../redux/testpage/testpage.selectors';

import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';

import TestBackendResponseTypes from './test-backend-response.types';
//components used
import {
  TestStartPageContainer,
  TestTitleWrapper,
  TestPrompt,
  PromptWrapper,
  TestName,
  TestDuration,
  TestMessage,
  QuestionsPromptContainer,
  Prompt,
  StartTestButton,
} from './test-start-page.styles';
// import TestPage from '../test-page/test-page.component';

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
  }

  componentWillUnmount() {
    console.log('TestStartPage Will unmount now');
  }

  render() {
    console.log('Test start page rendered!');
    const {
      match,
      history,
      current_test_name,
      test_message_from_backend,
      marksScoredOnTest,
      maxMarksPossible,
      testDuration,
      test_questions,
    } = this.props;
    console.log('Test message from backend!', test_message_from_backend);
    return (
      <>
        <TestStartPageContainer>
          <TestTitleWrapper>Test</TestTitleWrapper>
          <TestPrompt>
            <TestName>
              <PromptWrapper>Test Name :</PromptWrapper>
              {current_test_name}
            </TestName>
            {testDuration ? (
              <TestDuration>
                <PromptWrapper>Test Duration : </PromptWrapper>
                {testDuration} minutes
              </TestDuration>
            ) : null}
            {test_message_from_backend ===
            TestBackendResponseTypes.TEACHER_HAS_EVALUATED ? (
              <>
                <TestMessage>
                  <PromptWrapper>
                    <strong>
                      Your Teacher has evaluated the test and your marks are
                      out.
                    </strong>
                  </PromptWrapper>
                  {marksScoredOnTest !== null ? ` ${marksScoredOnTest}` : null}
                  {maxMarksPossible !== null ? ` / ${maxMarksPossible}` : null}
                </TestMessage>
              </>
            ) : test_message_from_backend ===
              TestBackendResponseTypes.TEACHER_WILL_EVALUATE ? (
              <>
                <TestMessage>
                  <PromptWrapper>
                    <strong>
                      Your test has been submitted and will soon be evaluated by
                      your teacher.
                    </strong>
                  </PromptWrapper>
                </TestMessage>
              </>
            ) : null}
          </TestPrompt>
          {test_questions ? (
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
          ) : null}
        </TestStartPageContainer>
      </>
    );
  }
  // ({ current_test_name }) => {
}

const mapStateToProps = createStructuredSelector({
  current_test_id: selectCurrentCourseTopicId,
  current_test_name: selectCurrentCourseTopicName,
  // current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  test_message_from_backend: selectTestMessageFromBackend,
  marksScoredOnTest: selectTestMarksScored,
  maxMarksPossible: selectTestMaxMarksPossible,
  testDuration: selectTestDuration,
  test_questions: selectTestQuestions,
});

export default connect(mapStateToProps)(withRouter(TestStartPage));
