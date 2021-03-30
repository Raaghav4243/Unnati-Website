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
  QuestionsPromptContainer,
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
  // constructor() {
  //   super();
  // }

  render() {
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
    return (
      <>
        <TestStartPageWrapper>
          <LogoWrapper>
            <TestLogo style={{ height: '80px' }} />
          </LogoWrapper>
          <Title>{current_test_name}</Title>
          <TestPrompt>
            {testDuration ? (
              <PromptField>
                <FieldTitle>Test Duration : </FieldTitle>
                <FieldValue>{testDuration} minutes</FieldValue>
              </PromptField>
            ) : null}
            {test_message_from_backend ===
            TestBackendResponseTypes.TEACHER_HAS_EVALUATED ? (
              <>
                <PromptField>
                  <FieldValue>
                    Your Teacher has evaluated the test and your marks are out.
                  </FieldValue>
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
                <PromptField>
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
                >
                  Start Test
                </Button>
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
