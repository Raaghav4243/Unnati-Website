import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import AssignmentAndTestSidenav from '../../components/assignment-test-sidenav/assignment-test-sidenav.component';
import Timer from 'react-compound-timer';

import { submitTestStart } from '../../redux/testpage/testpage.actions';

import {
  selectTestMessageFromBackend,
  selectTestQuestions,
  selectIsTestSubmitting,
  selectTestSubmittedConfirmationMessage,
  selectHasTestSubmissionFailed,
  selectTestName,
  selectTestDuration,
} from '../../redux/testpage/testpage.selectors';

import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';

import StudentDashboardNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';

import {
  PageWrapper,
  TimerWrapper,
  TestTitle,
  QuestionsWrapper,
  QuestionCardWrapper,
  // QuestionCardContainer,
  QuestionStatementContainer,
  QuestionsOptionsContainer,
  RadioLabel,
  RadioInput,
  RadioIndicator,
  CheckedLabel,
  CheckedInput,
  CheckedIndicator,
  TextLabel,
  TextInput,
  TextIndicator,
  // QuestionWrapper,
  // AssignmentWrapper,
  // WrappingQuestions,
  // AssignmentName,
  // AssignmentForm,
  // AllQuestions,
  // Questions,
  // Options,
} from './test-page.styles';
// import questionData from './data';

class TestPage extends React.Component {
  constructor() {
    super();

    this.state = {
      resp: {},
      // score: null,
      testDone: null,
    };
  }

  handleOnChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    // const responses = this.resp.push({name: [e.target.value]})
    //console.log(responses)
    //  this.setState({ selectedOption: e.target.value});
    //console.log(resp)
    const {
      test_questions,
      // assignmentName,
      // isAssignmentSubmitting,
      // assignmentSubmittedConfirmation,
      // assignmentSubmissionFailed,
    } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    console.log('NAME:', name);
    console.log('VALUE:', value);
    console.log('QUESTIONS ARRAY', test_questions);
    if (test_questions) {
      console.log('QUESTION REFERRED TO IS', test_questions[name]);
    }

    let response = this.state.resp;
    /*
      if (questionType === 'MULTICORRECT') {
      if (response[id] == undefined) {
        response[id] = [value];
      } else if (response[id].includes(value)) {
        let temp = response[id].filter((item) => {
          return item !== value;
        });
        response[id] = temp;
      } else {
        response[id].push(value);
      }
    } else {
      response[id] = [value];
    }
    */

    let questionType = test_questions[name].type;
    console.log('QUESTION TYPE IS', questionType);
    if (questionType === 'MULTICORRECT') {
      if (response[name] == undefined) {
        response[name] = [value];
      } else if (response[name].includes(value)) {
        let temp = response[name].filter((item) => {
          return item !== value;
        });
        response[name] = temp;
      } else {
        response[name].push(value);
      }
    } else {
      response[name] = [value];
    }

    console.log('RESPONSE BECOMES', response);
    this.setState({
      resp: response,
    });
  };

  handleSubmitSuccess = () => {
    // only call when post request is completed
    const { history } = this.props;
    history.push('/student/course');
  };

  handleSubmit = () => {
    const { test_questions, submitTestStart } = this.props;
    const { resp } = this.state;
    console.log('SUBMITTING TEST NOW');
    console.log('QUESTIONS RIGHT NOW ARE', test_questions);
    console.log('USER RESPONSES ARE', resp);

    let data = [];
    test_questions.map((question, index) => {
      data.push([question._id, resp[index]]);
    });
    console.log('DATA OBJECT BECOMES', data);
    submitTestStart(data);
  };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { test_questions, submitTestStart } = this.props;
  //     const { resp } = this.state;
  //     console.log('SUBMITTING ASSIGNMENT NOW');
  //     console.log('QUESTIONS ARE NOW', test_questions);
  //     console.log('RESPONSES OF USER are', resp);
  //     // calculate score
  //     let userResponses = Object.values(resp);
  //     console.log('RESPONSES OF USER IN ARRAY FORM are', userResponses);
  //     let score = 0;
  //     userResponses.map((userAnswerArray, index) => {
  //       let totalScorableMarksForQuestion = assignment_questions[index].maxMarks;
  //       let correctAnswerArray = assignment_questions[index].correctAns;
  //       let correctAnswerObj = {};
  //       correctAnswerArray.map((correctOption) => {
  //         correctAnswerObj[correctOption] = 'correct';
  //       });
  //       console.log(
  //         'CORRECT OPTIONS FOR EACH QUESTION FORM are',
  //         index,
  //         'OBJ - ',
  //         correctAnswerObj
  //       );
  //       let answersMarkedCorrect = 0;
  //       userAnswerArray.map((userMarkedOption) => {
  //         if (correctAnswerObj[userMarkedOption]) {
  //           answersMarkedCorrect = answersMarkedCorrect + 1;
  //         }
  //       });
  //       console.log('answers marked correct are', answersMarkedCorrect);
  //       if (answersMarkedCorrect === correctAnswerArray.length) {
  //         score = score + totalScorableMarksForQuestion;
  //         console.log('score after this question', score);
  //       }
  //     });
  //     console.log('SCORE IS', score);
  //     let data = {};
  //     data['marksScored'] = score;
  //     submitAssignmentStart(data);
  //     // alert('YOUR SCORE FOR THIS ATTEMPT IS', score);
  //     this.setState({ score: score });
  //   };

  componentWillUnmount = () => {
    // SUBMIT TEST
  };

  render() {
    const {
      test_questions,
      testName,
      testDuration,
      isAssignmentSubmitting,
      assignmentSubmittedConfirmation,
      assignmentSubmissionFailed,
    } = this.props;
    const { score } = this.state;
    console.log('TEST QUESTIONS RECIEVED', test_questions);
    console.log('TEST DURATION IS', testDuration);

    return (
      <>
        <StudentDashboardNavbar />
        <AssignmentAndTestSidenav forTest />
        <PageWrapper>
          <form onChange={this.handleOnChange}>
            <TestTitle>TEST : {testName}</TestTitle>
            <QuestionsWrapper>
              {test_questions
                ? test_questions.map((question, index) => {
                    return (
                      <>
                        <QuestionCardWrapper>
                          <QuestionStatementContainer>
                            {question.statement}
                          </QuestionStatementContainer>
                          <QuestionsOptionsContainer>
                            {question.type === 'MULTICORRECT' ? (
                              <>
                                {question.options.map((option, optionIndex) => {
                                  return (
                                    <CheckedLabel
                                      htmlFor={`${option}${index}${optionIndex}`}
                                    >
                                      {/* <label key={index} htmlFor={option}> */}
                                      {option}
                                      <CheckedInput
                                        type='checkbox'
                                        key={question.statement}
                                        id={`${option}${index}${optionIndex}`}
                                        name={index}
                                        value={option}
                                      />
                                      <CheckedIndicator />
                                    </CheckedLabel>
                                  );
                                })}
                              </>
                            ) : question.type === 'SINGLECORRECT' ? (
                              <>
                                {question.options.map((option, optionIndex) => {
                                  return (
                                    <RadioLabel
                                      htmlFor={`${option}${index}${optionIndex}`}
                                    >
                                      {option}
                                      <RadioInput
                                        type='radio'
                                        key={question.statement}
                                        id={`${option}${index}${optionIndex}`}
                                        name={index}
                                        value={option}
                                      />
                                      <RadioIndicator />
                                    </RadioLabel>
                                  );
                                })}
                              </>
                            ) : question.type === 'TYPED' ? (
                              <>
                                {/* <TextLabel htmlFor={index}>
                                TYPE YOUR ANSWER :
                                <TextInput
                                  type='text'
                                  id={index}
                                  name={index}
                                />
                                <TextIndicator />
                              </TextLabel> */}
                                <label htmlFor={index}>
                                  TYPE YOUR ANSWER:
                                  <input
                                    type='text'
                                    id={index}
                                    name={index}
                                  ></input>
                                </label>
                              </>
                            ) : null}
                          </QuestionsOptionsContainer>
                        </QuestionCardWrapper>
                      </>
                    );
                  })
                : null}
            </QuestionsWrapper>
          </form>
          {test_questions ? (
            <>
              <div>QUESTIONS RECEIVED</div>

              <TimerWrapper>
                Time Left :
                <Timer
                  initialTime={10000}
                  direction='backward'
                  checkpoints={[
                    {
                      time: 0,
                      callback: () => console.log('Time UP!'),
                    },
                    {
                      time: 5000,
                      callback: () => console.log('5 seconds left!'),
                    },
                  ]}
                >
                  {() => (
                    <React.Fragment>
                      <Timer.Hours />:
                      <Timer.Minutes />:
                      <Timer.Seconds />
                    </React.Fragment>
                  )}
                </Timer>
                <button onClick={this.handleSubmit}>SUBMIT THIS TEST</button>
              </TimerWrapper>
            </>
          ) : null}
        </PageWrapper>
      </>
    );
    // return (
    //   <>
    //     <StudentDashboardNavbar />
    //     <AssignmentAndTestSidenav />
    //     <PageWrapper>
    //       <form onSubmit={this.handleSubmit} onChange={this.handleOnChange}>
    //         <AssignmentTitle>TEST : {testName}</AssignmentTitle>
    //         <QuestionsWrapper>
    //           {/* {assignment_questions} */}
    //           {test_questions
    //             ? test_questions.map((question, index) => {
    //                 return (
    //                   <QuestionCardWrapper>
    //                     <QuestionStatementContainer>
    //                       {question.statement}
    //                     </QuestionStatementContainer>
    //                     <QuestionsOptionsContainer>
    //                       {question.type === 'MULTICORRECT' ? (
    //                         <>
    //                           {question.options.map((option) => {
    //                             return (
    //                               <CheckedLabel htmlFor={option}>
    //                                 {/* <label key={index} htmlFor={option}> */}
    //                                 {option}
    //                                 <CheckedInput
    //                                   type='checkbox'
    //                                   key={question.statement}
    //                                   id={option}
    //                                   name={index}
    //                                   value={option}
    //                                 />
    //                                 <CheckedIndicator />
    //                               </CheckedLabel>
    //                             );
    //                           })}
    //                         </>
    //                       ) : question.type === 'SINGLECORRECT' ? (
    //                         <>
    //                           {question.options.map((option) => {
    //                             return (
    //                               <RadioLabel htmlFor={option}>
    //                                 {option}
    //                                 <RadioInput
    //                                   type='radio'
    //                                   key={question.statement}
    //                                   id={option}
    //                                   name={index}
    //                                   value={option}
    //                                 />
    //                                 <RadioIndicator />
    //                               </RadioLabel>
    //                             );
    //                           })}
    //                         </>
    //                       ) : (
    //                         <>
    //                           <TextLabel htmlFor={option}>
    //                             {option}
    //                             <TextInput
    //                               type='text'
    //                               key={question.statement}
    //                               id={option}
    //                               name={index}
    //                               value={option}
    //                             />
    //                             <TextIndicator />
    //                           </TextLabel>
    //                         </>
    //                       )}
    //                     </QuestionsOptionsContainer>
    //                   </QuestionCardWrapper>
    //                 );
    //               })
    //             : null}
    //         </QuestionsWrapper>
    //         <div>ARE YOU SURE YOU WANT TO SUBMIT? YOU CAN'T GO BACK...</div>
    //         <button>Yes, Submit</button>
    //       </form>
    //       {/* For the time when SUBMIT TEST BUTTON IS CLICKED */}
    //       {/* <div>
    //         {isTestSubmitting ? (
    //           <div>TEST IS SUBMITTING...PLEASE WAIT.</div>
    //         ) : null}
    //         {testSubmittedConfirmation ? (
    //           <>
    //             <div>TEST SUBMITTED SUCCESSFULLY</div>
    //             <div>YOUR SCORE IS : {score}</div>
    //             <div
    //               onClick={this.handleSubmitSuccess}
    //               style={{ background: 'orange', color: 'white' }}
    //             >
    //               GO BACK TO COURSE PAGE
    //             </div>
    //           </>
    //         ) : null}
    //         {testSubmissionFailed ? (
    //           <>
    //             <div>SUBMISSION FAILED, PLEASE TRY AGAIN...</div>
    //           </>
    //         ) : null}
    //       </div> */}
    //     </PageWrapper>
    //   </>
    // );
  }
}

const mapStateToProps = createStructuredSelector({
  current_test_id: selectCurrentCourseTopicId,
  current_test_name: selectCurrentCourseTopicName,
  current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  test_questions: selectTestQuestions,
  testName: selectTestName,
  test_message_from_backend: selectTestMessageFromBackend,
  testDuration: selectTestDuration,
  isTestSubmitting: selectIsTestSubmitting,
  testSubmittedConfirmation: selectTestSubmittedConfirmationMessage,
  testSubmissionFailed: selectHasTestSubmissionFailed,
});

const mapDispatchToProps = (dispatch) => ({
  submitTestStart: (data) => dispatch(submitTestStart(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TestPage));
