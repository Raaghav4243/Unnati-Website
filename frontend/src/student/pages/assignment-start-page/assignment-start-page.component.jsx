import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import {
  selectAssignmentMessageFromBackend,
  // selectAssignmentMarksScored,
  // selectAssignmentId,
  // selectAssignmentName,
  selectAssignmentDuration,
  selectAssignmentMaxMarksScored,
  selectAssignmentQuestions,
  selectAssignmentAttemptsLeft,
  selectAssignmentMaxMarksPossible,
} from '../../redux/assignment-page/assignment-page.selectors';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';

//components used
import Button from '@material-ui/core/Button';
// import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';

//styles used
import {
  AssignmentStartPageWrapper,
  LogoWrapper,
  UnnatiLogo,
  Title,
  AssignmentTitleWrapper,
  AssignmentPrompt,
  PromptField,
  FieldTitle,
  FieldValue,
  PromptWrapper,
  AssignmentName,
  AssignmentDuration,
  AssignmentHighestScore,
  AssignmentAttemptsContainer,
  AttemptsWrapper,
  ClickPrompt,
  AttemptsLeftPrompt,
} from './assignment-start-page.styles';

import AssignmentBackendResponseTypes from './assignment-backend-response.types';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant='filled' {...props} />;
// }

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

class AssignmentStartPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const {
      //   current_user_id,
      //   current_course_id,
      //   current_test_id,
      //   fetchTestStart,
    } = this.props;
    console.log('AssignmentStartPage mounted');
    // fetchTestStart(current_user_id, current_course_id, current_test_id);
  }
  componentDidUpdate() {
    console.log('AssignmentStartPage did update!');
  }

  componentWillUnmount() {
    console.log('AssignmentStartPage Will unmount now');
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
    const {
      match,
      history,
      current_assignment_id,
      current_assignment_name,
      current_course_id,
      assignmentMessageFromBackend,
      maxMarksScored,
      maxMarksPossible,
      assignmentDuration,
      assignmentAttemptsLeft,
      assignmentQuestions,
      classes,
    } = this.props;
    console.log('Assignment start page rendered!');
    console.log(
      'Assignment message from backend',
      assignmentMessageFromBackend
    );
    console.log('Assignment questions received!', assignmentQuestions);
    console.log('Assignment max marks Scored', maxMarksScored);
    console.log('Assignment max marks Possible', maxMarksPossible);

    return (
      <>
        <AssignmentStartPageWrapper>
          <LogoWrapper>
            <UnnatiLogo style={{ height: '80px', fill: 'white' }} />
          </LogoWrapper>
          <Title>{current_assignment_name}</Title>
          <AssignmentPrompt>
            {/* <AssignmentName>
              <PromptWrapper>Assignment Name : </PromptWrapper>
              {current_assignment_name}
            </AssignmentName> */}

            {assignmentDuration ? (
              <PromptField>
                <FieldTitle>Assignment Duration : </FieldTitle>
                <FieldValue>{assignmentDuration} minutes</FieldValue>
              </PromptField>
            ) : null}
            {assignmentAttemptsLeft === 3 ? (
              <PromptField>
                <FieldValue>
                  You have not attempted this Assignment yet!
                </FieldValue>
                {/* <FieldValue>{assignmentDuration} minutes</FieldValue> */}
              </PromptField>
            ) : (
              <PromptField>
                <FieldTitle>Your Highest Score :</FieldTitle>
                <FieldValue>
                  {maxMarksScored !== null ? ` ${maxMarksScored}` : null}
                  {maxMarksPossible !== null
                    ? ` / ${maxMarksPossible}`
                    : null}{' '}
                  marks
                </FieldValue>
              </PromptField>
            )}
          </AssignmentPrompt>
          {assignmentQuestions ? (
            <AssignmentAttemptsContainer>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.button}
                onClick={() => {
                  history.push(`${match.path}/assignment`);
                }}
                // startIcon={<SaveIcon />}
              >
                Attempt Assignment
              </Button>
              <Alert severity='info'>
                {assignmentAttemptsLeft == 1
                  ? `Currently you have ${assignmentAttemptsLeft} attempt left`
                  : `Currently you have ${assignmentAttemptsLeft} attempts left`}{' '}
              </Alert>
            </AssignmentAttemptsContainer>
          ) : (
            <Alert severity='info'>{`You have 0 attempts left for this assignment`}</Alert>
          )}
        </AssignmentStartPageWrapper>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  current_assignment_id: selectCurrentCourseTopicId,
  current_assignment_name: selectCurrentCourseTopicName,
  //   current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  assignmentMessageFromBackend: selectAssignmentMessageFromBackend,
  maxMarksScored: selectAssignmentMaxMarksScored,
  maxMarksPossible: selectAssignmentMaxMarksPossible,
  assignmentDuration: selectAssignmentDuration,
  assignmentAttemptsLeft: selectAssignmentAttemptsLeft,
  assignmentQuestions: selectAssignmentQuestions,
  //   test_questions: selectTestQuestions,
  //   test_message: selectTestMessage,
});

export default connect(mapStateToProps)(
  withRouter(withStyles(useStyles)(AssignmentStartPage))
);
