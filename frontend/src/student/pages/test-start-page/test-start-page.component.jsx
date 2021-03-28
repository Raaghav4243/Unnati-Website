import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

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
import Button from '@material-ui/core/Button';
// import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';

//styles used
import {
  TestStartPageWrapper,
  LogoWrapper,
  TestLogo,
  Title,
  TestPrompt,
  PromptField,
  FieldTitle,
  FieldValue,
  TestStartPageContainer,
  TestTitleWrapper,
  // TestPrompt,
  PromptWrapper,
  TestName,
  TestDuration,
  TestMessage,
  QuestionsPromptContainer,
  Prompt,
  StartTestButton,
} from './test-start-page.styles';
// import TestPage from '../test-page/test-page.component';

const useStyles = (theme) => ({
  button: {
    // marginRight: theme.spacing(4),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    color: 'white',
    fontWeight: 500,
    width: '100%',
  },
});

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
      classes,
    } = this.props;
    console.log('Test message from backend!', test_message_from_backend);
    return (
      <>
        <TestStartPageWrapper>
          <LogoWrapper>
            <TestLogo style={{ height: '80px' }} />
          </LogoWrapper>
          <Title>{current_test_name}</Title>
          <TestPrompt>
            {/* <TestName>
              <PromptWrapper>Test Name :</PromptWrapper>
              {current_test_name}
            </TestName> */}
            {testDuration ? (
              // <TestDuration>
              //   <PromptWrapper>Test Duration : </PromptWrapper>
              //   {testDuration} minutes
              // </TestDuration>
              <PromptField>
                <FieldTitle>Test Duration : </FieldTitle>
                <FieldValue>{testDuration} minutes</FieldValue>
              </PromptField>
            ) : null}
            {test_message_from_backend ===
            TestBackendResponseTypes.TEACHER_HAS_EVALUATED ? (
              <>
                {/* <TestMessage>
                  <PromptWrapper>
                    <strong>
                      Your Teacher has evaluated the test and your marks are
                      out.
                    </strong>
                  </PromptWrapper>
                  {marksScoredOnTest !== null ? ` ${marksScoredOnTest}` : null}
                  {maxMarksPossible !== null ? ` / ${maxMarksPossible}` : null}
                </TestMessage> */}
                <PromptField>
                  <FieldValue>
                    Your Teacher has evaluated the test and your marks are out.
                  </FieldValue>
                  {/* <FieldValue>
                    {' '}
                    {marksScoredOnTest !== null
                      ? `: ${marksScoredOnTest}`
                      : null}
                    {maxMarksPossible !== null
                      ? ` / ${maxMarksPossible}`
                      : null}
                  </FieldValue> */}
                </PromptField>
                <PromptField>
                  <FieldTitle>You have scored:</FieldTitle>
                  <FieldValue>
                    {' '}
                    {marksScoredOnTest !== null ? `${marksScoredOnTest}` : null}
                    {maxMarksPossible !== null
                      ? ` / ${maxMarksPossible}`
                      : null}{' '}
                    marks
                  </FieldValue>
                </PromptField>
              </>
            ) : test_message_from_backend ===
              TestBackendResponseTypes.TEACHER_WILL_EVALUATE ? (
              <>
                {/* <TestMessage>
                  <PromptWrapper>
                    <strong>
                      Your test has been submitted and will soon be evaluated by
                      your teacher.
                    </strong>
                  </PromptWrapper>
                </TestMessage> */}
                <PromptField>
                  {/* <FieldTitle>
                    Your Teacher has evaluated the test and your marks are out.
                  </FieldTitle> */}
                  <FieldValue>
                    Your test has been submitted and will soon be evaluated by
                    your teacher.
                  </FieldValue>
                </PromptField>
              </>
            ) : null}
          </TestPrompt>
          {test_questions ? (
            <>
              {/* <Route path={`${match.path}/test`} component={TestPage} /> */}
              {console.log('QUESTIONS ARRAY:', test_questions)}
              <QuestionsPromptContainer>
                <Button
                  variant='contained'
                  color='secondary'
                  size='large'
                  type='submit'
                  className={classes.button}
                  onClick={() => {
                    history.push(`${match.path}/test`);
                  }}
                  // startIcon={<SaveIcon />}
                >
                  Start Test
                </Button>

                {/* <Prompt>
                  Are you sure you want to start this test? Once Started, it
                  cannot be paused without submission.
                </Prompt>
                <StartTestButton
                  onClick={() => {
                    history.push(`${match.path}/test`);
                  }}
                >
                  Start Test
                </StartTestButton> */}
              </QuestionsPromptContainer>
              <Alert severity='info'>
                Are you sure you want to start this test? Once started, it
                cannot be paused without submission.
              </Alert>
            </>
          ) : null}
        </TestStartPageWrapper>
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

export default connect(mapStateToProps)(
  withRouter(withStyles(useStyles)(TestStartPage))
);
