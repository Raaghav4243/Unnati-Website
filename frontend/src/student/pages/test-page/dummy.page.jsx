// // class AssignmentPage extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       resp: {},
// //       sahijawab: [],
// //       jawab: [],
// //       done: false,
// //       score: { marksScored: 0 },
// //     };
// //   }

// //   componentDidMount() {
// //     console.log('Assignment Page has mounted');
// //     // const user_id = this.props.current_user_id;
// //     // const course_id = this.props.current_course_id;
// //     // const assignment_id = this.props.current_assignment_id;
// //     // const { fetchAssignmentStart } = this.props;
// //     // fetchAssignmentStart({ user_id, course_id, assignment_id });
// //   }
// //   componentWillUnmount() {
// //     console.log('Assignment Page Will unmount now');
// //   }

// //   handleOnChange = (e) => {
// //     //console.log(e.target.value);
// //     //console.log(e.target.name);
// //     // const responses = this.resp.push({name: [e.target.value]})
// //     //console.log(responses)
// //     //  this.setState({ selectedOption: e.target.value});
// //     //console.log(resp)
// //     const value = e.target.value;
// //     const name = e.target.name;
// //     let response = this.state.resp;
// //     response[name] = value;
// //     console.log(response);
// //     this.setState(
// //       {
// //         resp: response,
// //       },
// //       () => {
// //         console.log(this.state);
// //       }
// //     );
// //   };

// //   handleClick = (e) => {
// //     e.preventDefault();
// //     const questionNumbers = questionData.assignment.questions.map(
// //       (number) => number.number
// //     );
// //     let responses = [];
// //     questionNumbers.forEach((questionNumber) => {
// //       let response = this.state.resp[questionNumber];
// //       responses.push(response);
// //     });
// //     console.log(responses);
// //     this.setState({ jawab: responses });
// //     const answers = questionData.assignment.questions.map(
// //       (answer) => answer.correctAns[0]
// //     );
// //     this.setState({ sahijawab: answers });
// //     console.log(answers);
// //     const compareArray = (a, b) => {
// //       let marks = 0;
// //       for (let i = 0; i < a.length; i++) {
// //         if (a[i] == b[i]) {
// //           marks = marks + 1;
// //         }
// //         //console.log(a[i], b[i])
// //       }
// //       console.log(marks);
// //       this.setState({ score: marks, done: true });
// //     };
// //     compareArray(responses, answers);
// //     console.log(this.state);

// //     let data = this.state.score;
// //     console.log('page data', data);
// //     const { submitAssignmentStart } = this.props;
// //     submitAssignmentStart(data);
// //   };

// //   render() {
// //     console.log('Assignment page has rendered');
// //     const {
// //       assignment_message_from_backend,
// //       assignment_questions,
// //     } = this.props;
// //     let i = -1;
// //     return (
// //       <>
// //         <StudentDashboardNavbar />
// //         <AssignmentAndTestSidenav />
// //         {this.state.done === false ? (
// //           <AssignmentWrapper>
// //             {assignment_message_from_backend ? (
// //               <div>MESSAGE FROM BACKEND {assignment_message_from_backend}</div>
// //             ) : (
// //               <div>Loading...</div>
// //             )}
// //             {assignment_questions ? (
// //               <div>QUESTIONS RECEIVED</div>
// //             ) : (
// //               <div>Loading...</div>
// //             )}

// //             <WrappingQuestions>
// //               <AssignmentName>
// //                 Assignment - 1 {questionData.assignment.assignmentName}
// //               </AssignmentName>

// //               <AssignmentForm onChange={(e) => this.handleOnChange(e)}>
// //                 <AllQuestions>
// //                   {questionData.assignment.questions.map((question, number) => {
// //                     //console.log(option)

// //                     return (
// //                       <>
// //                         <QuestionWrapper>
// //                           <Questions key={number}>
// //                             Q{question.number}) {question.statement}
// //                             <br />
// //                           </Questions>
// //                           {question.options.map((option, index) => {
// //                             //   console.log(option)
// //                             //console.log(number)
// //                             return (
// //                               <>
// //                                 <Options>
// //                                   <input
// //                                     type='radio'
// //                                     key={question.statement}
// //                                     value={option}
// //                                     id={option}
// //                                     name={question.number}
// //                                   />
// //                                   <label key={index} htmlFor={option}>
// //                                     {option}
// //                                   </label>
// //                                   <br />
// //                                 </Options>
// //                                 <div></div>
// //                               </>
// //                             );
// //                           })}
// //                         </QuestionWrapper>
// //                       </>
// //                     );
// //                   })}
// //                 </AllQuestions>
// //                 <button onClick={(e) => this.handleClick(e)}>submit</button>
// //               </AssignmentForm>
// //             </WrappingQuestions>
// //           </AssignmentWrapper>
// //         ) : (
// //           <>
// //             <div>
// //               <div>your score is: {this.state.score.marksScored}</div>
// //             </div>
// //             <div>
// //               {this.state.jawab ? (
// //                 <div>
// //                   {this.state.jawab.map((responses, index) => {
// //                     if (this.state.sahijawab[index] === responses) {
// //                       return (
// //                         <div>
// //                           <div>
// //                             {questionData.assignment.questions[index].statement}
// //                           </div>
// //                           <div>
// //                             {questionData.assignment.questions[
// //                               index
// //                             ].options.map((option) => {
// //                               return <div>{option}</div>;
// //                             })}
// //                           </div>

// //                           {responses ? (
// //                             <div>
// //                               USER GAVE THE CORRECT ANSWER! User response:{' '}
// //                               {this.state.jawab[index]}, correct answer:{' '}
// //                               {this.state.sahijawab[index]}
// //                             </div>
// //                           ) : (
// //                             <div>
// //                               Unattempted, correct answer :
// //                               {this.state.sahijawab[index]}
// //                             </div>
// //                           )}
// //                         </div>
// //                       );
// //                     } else {
// //                       return (
// //                         <div>
// //                           <div>
// //                             {questionData.assignment.questions[index].statement}
// //                           </div>
// //                           <div>
// //                             {questionData.assignment.questions[
// //                               index
// //                             ].options.map((option) => {
// //                               return <div>{option}</div>;
// //                             })}
// //                           </div>

// //                           {responses ? (
// //                             <div>
// //                               {' '}
// //                               USER GAVE WRONG ANSWER! User response is:{' '}
// //                               {this.state.jawab[index]}, correct answer:{' '}
// //                               {this.state.sahijawab[index]}
// //                             </div>
// //                           ) : (
// //                             <div>
// //                               Unattempted, correct answer :
// //                               {this.state.sahijawab[index]}
// //                             </div>
// //                           )}
// //                         </div>
// //                       );
// //                     }
// //                   })}
// //                 </div>
// //               ) : null}
// //             </div>
// //           </>
// //         )}
// //       </>
// //     );
// //   }
// // }

// // import React, { Component } from 'react';
// // import { createStructuredSelector } from 'reselect';
// // import { withRouter } from 'react-router-dom';
// // import { connect } from 'react-redux';
// // import data from './data';
// // import Timer from 'react-compound-timer';
// // import { TestPageContainer } from './test-page.styles';
// // import {
// //   selectCurrentCourseId,
// //   selectCurrentCourseTopicId,
// //   selectCurrentCourseTopicName,
// // } from '../../redux/student/student.selectors';
// // import { selectCurrentUserId } from '../../redux/user/user.selectors';
// // import {
// //   selectTestMessage,
// //   selectTestQuestions,
// // } from '../../redux/testpage/testpage.selectors';

class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      resp: {},
      quesResp: {},
      time: data.test.duration * 60 * 1000,
    };
  }

  componentDidMount() {}

  handleOnChange = (e) => {
    const { name, value, id } = e.target;

    let response = this.state.resp;
    console.log(name);
    const questionType = data.test.questions[id - 1].type;

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

    console.log('resp', response);
    this.setState(
      {
        resp: response,
      },
      () => {
        console.log('state', this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.resp;
    let values = Object.values(data);
    console.log(values);
    // fetch("/login", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  handleQuestionSubmitOnChange = (e) => {
    e.preventDefault();
    const { name, value, id } = e.target;
    const questionResponse = this.state.quesResp;
    questionResponse[id] = [value];
    this.setState({
      quesResp: questionResponse,
    });
  };

  handleQuestionSubmit = (e) => {
    e.preventDefault();
    // fetch("/submit-response/user/:userId/test/:testId/question/:questionId", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  //   render() {
  //     const {
  //       assignment_questions,
  //       testName,
  //       isAssignmentSubmitting,
  //       assignmentSubmittedConfirmation,
  //       assignmentSubmissionFailed,
  //     } = this.props;
  //     const { score } = this.state;
  //     console.log('ASSIGNMENT QUESTIONS RECIEVED', assignment_questions);
  //     return (
  //       <>
  //         <StudentDashboardNavbar />
  //         <AssignmentAndTestSidenav />
  //         <PageWrapper>
  //           <form onSubmit={this.handleSubmit} onChange={this.handleOnChange}>
  //             <AssignmentTitle>ASSIGNMENT : {assignmentName}</AssignmentTitle>
  //             <QuestionsWrapper>
  //               {/* {assignment_questions} */}
  //               {assignment_questions
  //                 ? assignment_questions.map((question, index) => {
  //                     return (
  //                       <QuestionCardWrapper>
  //                         <QuestionStatementContainer>
  //                           {question.statement}
  //                         </QuestionStatementContainer>
  //                         <QuestionsOptionsContainer>
  //                           {question.type === 'MULTICORRECT' ? (
  //                             <>
  //                               {question.options.map((option) => {
  //                                 return (
  //                                   <CheckedLabel htmlFor={option}>
  //                                     {/* <label key={index} htmlFor={option}> */}
  //                                     {option}
  //                                     <CheckedInput
  //                                       type='checkbox'
  //                                       key={question.statement}
  //                                       id={option}
  //                                       name={index}
  //                                       value={option}
  //                                     />
  //                                     <CheckedIndicator />
  //                                   </CheckedLabel>
  //                                 );
  //                               })}
  //                             </>
  //                           ) : (
  //                             <>
  //                               {question.options.map((option) => {
  //                                 return (
  //                                   <RadioLabel htmlFor={option}>
  //                                     {option}
  //                                     <RadioInput
  //                                       type='radio'
  //                                       key={question.statement}
  //                                       id={option}
  //                                       name={index}
  //                                       value={option}
  //                                     />
  //                                     <RadioIndicator />
  //                                   </RadioLabel>
  //                                 );
  //                               })}
  //                             </>
  //                           )}
  //                         </QuestionsOptionsContainer>
  //                       </QuestionCardWrapper>
  //                     );
  //                   })
  //                 : null}
  //             </QuestionsWrapper>
  //             <div>ARE YOU SURE YOU WANT TO SUBMIT? YOU CAN'T GO BACK...</div>
  //             <button>Yes, Submit</button>
  //           </form>
  //           {/* For the time when SUBMIT ASSIGNMENT BUTTON IS CLICKED */}
  //           <div>
  //             {isAssignmentSubmitting ? (
  //               <div>ASSIGNMENT IS SUBMITTING...PLEASE WAIT.</div>
  //             ) : null}
  //             {assignmentSubmittedConfirmation ? (
  //               <>
  //                 <div>ASSIGNMENT SUBMITTED SUCCESSFULLY</div>
  //                 <div>YOUR SCORE IS : {score}</div>
  //                 <div
  //                   onClick={this.handleSubmitSuccess}
  //                   style={{ background: 'orange', color: 'white' }}
  //                 >
  //                   GO BACK TO COURSE PAGE
  //                 </div>
  //               </>
  //             ) : null}
  //             {assignmentSubmissionFailed ? (
  //               <>
  //                 <div>SUBMISSION FAILED, PLEASE TRY AGAIN...</div>
  //               </>
  //             ) : null}
  //           </div>
  //         </PageWrapper>
  //       </>
  //     );
  //   }
  // }

  render() {
    return (
      <>
        <TestPageContainer>
          <Timer initialTime={this.state.time} direction='backward'>
            {() => (
              <React.Fragment>
                <Timer.Hours />:
                <Timer.Minutes />:
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
          <div>
            <div className='testame'>Test - 1 {data.test.testName}</div>

            <div
              type='submit'
              onChange={(e) => this.handleOnChange(e)}
              onSubmit={this.handleSubmit}
            >
              <div>
                {data.test.questions.map((question, number) => {
                  return (
                    <>
                      <form
                        key={number}
                        onChange={this.handleQuestionSubmitOnChange}
                        onSubmit={this.handleQuestionSubmit}
                      >
                        {question.statement}
                        {question.type === 'MULTICORRECT' ? (
                          <>
                            {question.options.map((option, index) => {
                              return (
                                <label key={index} htmlFor={option}>
                                  <input
                                    type='checkbox'
                                    key={option}
                                    value={option}
                                    id={question.number}
                                    name={question._id}
                                  />
                                  {option} <br />
                                </label>
                              );
                            })}
                          </>
                        ) : null}

                        {question.type === 'SINGLECORRECT' ? (
                          <>
                            {question.options.map((option, index) => {
                              return (
                                <label key={index} htmlFor={option}>
                                  <input
                                    type='radio'
                                    key={option}
                                    value={option}
                                    id={question.number}
                                    name={question._id}
                                  />
                                  {option} <br />
                                </label>
                              );
                            })}
                          </>
                        ) : null}
                        {question.type === 'TYPED' ? (
                          <>
                            <label htmlFor={number}>
                              <input
                                type='text'
                                id={question.number}
                                name={question._id}
                              />
                            </label>
                          </>
                        ) : null}
                        <button type='submit'>Submit question</button>
                      </form>
                    </>
                  );
                })}
              </div>
              <button>submit</button>
            </div>
          </div>
        </TestPageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  current_test_id: selectCurrentCourseTopicId,
  current_test_name: selectCurrentCourseTopicName,
  current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  test_questions: selectTestQuestions,
  test_message_from_backend: selectTestMessage,
  // isAssignmentSubmitting: selectIsAssignmentSubmitting,
  // assignmentSubmittedConfirmation: selectAssignmentSubmittedConfirmationMessage,
  // assignmentSubmissionFailed: selectHasAssignmentSubmissionFailed,
});

const mapDispatchToProps = (dispatch) => ({
  // submitTestStart: (data) => dispatch(submitTestStart(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TestPage));

// export default TestPage;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// SECOND CODE --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   handleClick = (e) => {
//     e.preventDefault();
//     const questionNumbers = questionData.assignment.questions.map(
//       (number) => number.number
//     );
//     let responses = [];
//     questionNumbers.forEach((questionNumber) => {
//       let response = this.state.resp[questionNumber];
//       responses.push(response);
//     });
//     console.log(responses);
//     this.setState({ jawab: responses });
//     const answers = questionData.assignment.questions.map(
//       (answer) => answer.correctAns[0]
//     );
//     this.setState({ sahijawab: answers });
//     console.log(answers);
//     const compareArray = (a, b) => {
//       let marks = 0;
//       for (let i = 0; i < a.length; i++) {
//         if (a[i] == b[i]) {
//           marks = marks + 1;
//         }
//         //console.log(a[i], b[i])
//       }
//       console.log(marks);
//       this.setState({ score: marks, done: true });
//     };
//     compareArray(responses, answers);
//     console.log(this.state);

//     let data = this.state.score;
//     console.log('page data', data);
//     const { submitAssignmentStart } = this.props;
//     submitAssignmentStart(data);
//   };
