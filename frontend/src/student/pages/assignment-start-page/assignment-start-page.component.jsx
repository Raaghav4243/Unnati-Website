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
  AssignmentLogo,
  Title,
  AssignmentPrompt,
  PromptField,
  FieldTitle,
  FieldValue,
  AssignmentAttemptsContainer,
} from './assignment-start-page.styles';

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
  // constructor() {
  //   super();
  // }

  render() {
    const {
      match,
      history,
      current_assignment_name,
      maxMarksScored,
      maxMarksPossible,
      assignmentDuration,
      assignmentAttemptsLeft,
      assignmentQuestions,
      classes,
    } = this.props;

    return (
      <>
        <AssignmentStartPageWrapper>
          <LogoWrapper>
            <AssignmentLogo style={{ height: '80px' }} />
          </LogoWrapper>
          <Title>{current_assignment_name}</Title>
          <AssignmentPrompt>
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
              >
                Attempt Assignment
              </Button>
              <Alert severity='info'>
                {assignmentAttemptsLeft === 1
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
});

export default connect(mapStateToProps)(
  withRouter(withStyles(useStyles)(AssignmentStartPage))
);
