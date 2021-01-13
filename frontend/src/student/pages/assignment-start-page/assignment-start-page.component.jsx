import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// import { selectCurrentCourseId } from '../../redux/student/student.selectors';

// import { selectCurrentUserId } from '../../redux/user/user.selectors';

// import { fetchTestStart } from '../../redux/testpage/testpage.actions';

// import {
//   selectCurrentCourseTopicId,
//   selectCurrentCourseTopicName,
// } from '../../redux/student/student.selectors';

import {
  selectAssignmentMessageFromBackend,
  selectAssignmentMarksScored,
  selectAssignmentId,
  selectAssignmentName,
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

//styles used
import {
  AssignmentPageContainer,
  AssignmentTitleWrapper,
  AssignmentPrompt,
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
        <AssignmentPageContainer>
          <AssignmentTitleWrapper>Assignment</AssignmentTitleWrapper>
          <AssignmentPrompt>
            <AssignmentName>
              <PromptWrapper>Assignment Name : </PromptWrapper>
              {current_assignment_name}
            </AssignmentName>
            {assignmentDuration ? (
              <AssignmentDuration>
                <PromptWrapper>Assignment Duration : </PromptWrapper>
                {assignmentDuration}
              </AssignmentDuration>
            ) : null}
            {assignmentAttemptsLeft === 3 ? (
              <AssignmentHighestScore>
                <PromptWrapper>
                  <strong>You have not attempted this Assignment yet!</strong>
                </PromptWrapper>
              </AssignmentHighestScore>
            ) : (
              <AssignmentHighestScore>
                <PromptWrapper>
                  Your Highest Score for this Assignment :
                </PromptWrapper>
                {maxMarksScored !== null ? ` ${maxMarksScored}` : null}
                {maxMarksPossible !== null ? ` / ${maxMarksPossible}` : null}
              </AssignmentHighestScore>
            )}
          </AssignmentPrompt>
          {assignmentQuestions ? (
            <AssignmentAttemptsContainer>
              <AttemptsWrapper
                onClick={() => {
                  history.push(`${match.path}/assignment`);
                }}
              >
                <ClickPrompt>Click here to start the Assignment:</ClickPrompt>
                <AttemptsLeftPrompt>
                  {assignmentAttemptsLeft} attempts left
                </AttemptsLeftPrompt>
              </AttemptsWrapper>
            </AssignmentAttemptsContainer>
          ) : null}
        </AssignmentPageContainer>
      </>
    );
    // return (
    //   <>
    //     <TestStartPageContainer>
    //       {/* Do you want to start this test? : {current_test_name}
    //         {current_user_id}
    //         Course:
    //         {current_course_id}
    //         Test:
    //         {current_test_id}
    //         {test_message ? (
    //           <div> Message from backend {test_message}</div>
    //         ) : test_questions ? (
    //           <>
    //             <div>Questions Received</div>
    //             <TestPage />
    //           </>
    //         ) : null} */}
    //       {test_message ? (
    //         <div>MESSAGE RECEIVED</div>
    //       ) : test_questions ? (
    //         <>
    //           {/* <Route path={`${match.path}/test`} component={TestPage} /> */}
    //           {console.log('QUESTIONS ARRAY:', test_questions)}
    //           <QuestionsPromptContainer>
    //             <Prompt>
    //               Are you sure you want to start this test? Once Started, it
    //               cannot be paused without submission.
    //             </Prompt>
    //             <StartTestButton
    //               onClick={() => {
    //                 history.push(`${match.path}/test`);
    //               }}
    //             >
    //               Start Test
    //             </StartTestButton>
    //           </QuestionsPromptContainer>
    //         </>
    //       ) : (
    //         <div>WE ARE FINDING YOUR TEST... </div>
    //       )}
    //     </TestStartPageContainer>
    //   </>
    // );
  }
  // ({ current_test_name }) => {
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

export default connect(mapStateToProps)(withRouter(AssignmentStartPage));
