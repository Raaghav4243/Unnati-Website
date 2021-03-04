import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// import SideNav from '../../components/SideNav/SideNav';

// import { fetchAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';
import {
  selectAssignmentMessageFromBackend,
  selectAssignmentQuestions,
  selectIsAssignmentSubmitting,
  selectAssignmentSubmittedConfirmationMessage,
  selectHasAssignmentSubmissionFailed,
  selectAssignmentName,
  selectAssignmentDuration,
  selectAssignmentReducerError,
} from '../../redux/assignment-page/assignment-page.selectors';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import {
  resetAssignmentInfo,
  submitAssignmentStart,
} from '../../redux/assignment-page/assignment-page.actions';

import AssignmentAndTestHeader from '../../components/assignment-test-header/assignment-test-header.component';

import StudentDashboardNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { ReactComponent as CorrectIcon } from '../../icons/correct.svg';
import { ReactComponent as IncorrectIcon } from '../../icons/x-button.svg';
import { ReactComponent as UnattemptedIcon } from '../../icons/warn.svg';

import {
  AssignmentNavbar,
  ButtonWrapper,
  PageWrapper,
  Form,
  // QuestionsContainer,
  AssignmentTitle,
  QuestionsWrapper,
  QuestionCardWrapper,
  // QuestionCardContainer,
  QuestionStatementContainer,
  QuestionPrompt,
  QuestionStatement,
  QuestionNoSpan,
  MarksPrompt,
  QuestionsOptionsContainer,
  Scorecard,
  PromptWrapper,
  Prompt,
  Score,
  ResponseSheet,
  IconWrapper,
  ScoreDiv,
  TimePrompt,
  OptionWrapper,
  // QuestionWrapper,
  // AssignmentWrapper,
  // WrappingQuestions,
  // AssignmentName,
  // AssignmentForm,
  // AllQuestions,
  // Questions,
  // Options,
} from './assignment-page.styles';
import { ThemeConsumer } from 'styled-components';
// import questionData from './data';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

// material ui styling
const useStyles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      width: '30ch',
    },
  },
  button: {
    // marginRight: theme.spacing(4),
    // marginTop: theme.spacing(2),
    color: 'white',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

  formControlForQuestion: {
    // marginTop: theme.spacing(0.5),
    // paddingTop: theme.spacing(1),
    width: '100%',

    // marginLeft: theme.spacing(2.5),
    // background: 'red',
    // marginBottom: theme.spacing(1),
    // marginTop: 15,
    // minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  alert: {
    width: '100%',
    // marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    // backgroundColor : '',
    // boxShadow: 'null',
  },
});

class AssignmentPage extends React.Component {
  constructor() {
    super();

    this.state = {
      resp: {},
      score: null,
      totalObtainableMarks: null,
      score: null,
      scoreTracker: null,
      correctAnswersByUser: null,
      incorrectAnswersByUser: null,
      unattemptedAnswersByUser: null,
      answerKey: null,
      assignmentDone: false,
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
      assignment_questions,
      // assignmentName,
      // isAssignmentSubmitting,
      // assignmentSubmittedConfirmation,
      // assignmentSubmissionFailed,
    } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    console.log('NAME:', name);
    console.log('VALUE:', value);
    console.log('QUESTIONS ARRAY', assignment_questions);

    let q_no = name;

    if (assignment_questions) {
      console.log('QUESTION REFERRED TO IS', assignment_questions[name]);
    }

    let resp = this.state.resp;
    let questionType = assignment_questions[name].type;
    console.log('QUESTION TYPE IS', questionType);

    if (questionType === 'SINGLECORRECT') {
      resp[q_no] = value;
    } else if (questionType === 'MULTICORRECT') {
      if (resp[q_no]) {
        if (resp[q_no][value]) {
          delete resp[q_no][value];
        } else {
          resp[q_no][value] = 'marked';
        }
      } else {
        resp[q_no] = {};
        resp[q_no][value] = 'marked';
      }
    } else {
    }

    // if (questionType === 'MULTICORRECT') {
    //   if (response[name] == undefined) {
    //     response[name] = [value];
    //   } else if (response[name].includes(value)) {
    //     let temp = response[name].filter((item) => {
    //       return item !== value;
    //     });
    //     response[name] = temp;
    //   } else {
    //     response[name].push(value);
    //   }
    // } else {
    //   response[name] = [value];
    // }

    console.log('RESPONSE BECOMES', resp);
    this.setState({
      resp: resp,
    });
  };

  handleSubmitSuccess = () => {
    // only call when post request is completed
    const { history } = this.props;
    history.push('/student/course');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { assignment_questions, submitAssignmentStart } = this.props;
    const { resp } = this.state;
    console.log('SUBMITTING ASSIGNMENT NOW');
    console.log('QUESTIONS ARE NOW', assignment_questions);
    console.log('RESPONSES OF USER are', resp);
    let score = 0;

    let totalObtainableMarks = 0;
    let correct_answers_numbers = {};
    let incorrect_answers_numbers = {};
    let unattempted_answers_numbers = {};
    let scoreTracker = {};
    let answerKey = {};

    assignment_questions.map((question, q_no) => {
      console.log('QUESTION NO : ', q_no, ' QUESTION : ', question);
      let correct_ans_array = question.correctAns;
      let maxMarks = question.maxMarks;

      if (resp[q_no]) {
        // attempted
        if (question.type == 'SINGLECORRECT') {
          if (resp[q_no] == correct_ans_array[0]) {
            // correct
            correct_answers_numbers[q_no] = 'correct';
            scoreTracker[q_no] = maxMarks;
            score += maxMarks;
          } else {
            // incorrect
            incorrect_answers_numbers[q_no] = 'incorrect';
            scoreTracker[q_no] = 0;
          }
        } else if (question.type == 'MULTICORRECT') {
          // if(resp[q_no])
          let allMarkedMultiCorrectAns = Object.values(resp[q_no]);
          console.log('ALL MARKED OPTIONS ARE', allMarkedMultiCorrectAns);
          if (allMarkedMultiCorrectAns.length == correct_ans_array.length) {
            let check = correct_ans_array.every(
              (correct_option_from_backend) => {
                return resp[q_no][correct_option_from_backend];
              }
            );
            // console.log('')
            if (check) {
              // correct
              correct_answers_numbers[q_no] = 'correct';
              scoreTracker[q_no] = maxMarks;
              score += maxMarks;
            } else {
              // incorrect
              incorrect_answers_numbers[q_no] = 'incorrect';
              scoreTracker[q_no] = 0;
            }
          } else {
            // incorrect
            incorrect_answers_numbers[q_no] = 'incorrect';
            scoreTracker[q_no] = 0;
          }
        } else {
        }
      } else {
        // unmarked
        unattempted_answers_numbers[q_no] = 'unmarked';
        scoreTracker[q_no] = 0;
      }

      totalObtainableMarks += maxMarks;

      // generating answer key for current question
      let keyObj = {};
      correct_ans_array.map((correct_option) => {
        keyObj[correct_option] = 'correct';
      });
      answerKey[q_no] = keyObj;
    });

    console.log('CORRECT ANSWERS BY USER', correct_answers_numbers);
    console.log('INCORRECT ANSWERS BY USER', incorrect_answers_numbers);
    console.log('UNATTEMTED ANSWERS BY USER', unattempted_answers_numbers);

    console.log('TOTAL OBTAINABLE MARKS ARE', totalObtainableMarks);
    console.log('SCORE IS', score);
    console.log('SCORE TRACKER ', scoreTracker);
    console.log('ANSWER KEY FOR ASSIGNMENT IS', answerKey);

    let data = {};
    data['marksScored'] = score;
    this.setState({
      totalObtainableMarks: totalObtainableMarks,
      score: score,
      scoreTracker: scoreTracker,
      correctAnswersByUser: correct_answers_numbers,
      incorrectAnswersByUser: incorrect_answers_numbers,
      unattemptedAnswersByUser: unattempted_answers_numbers,
      answerKey: answerKey,
      assignmentDone: true,
      // questionsForGeneratingResponseSheet: assignment_questions,
    });

    submitAssignmentStart(data);
    // alert('YOUR SCORE FOR THIS ATTEMPT IS', score);
  };

  componentWillUnmount() {
    const { resetAssignmentInfo } = this.props;
    resetAssignmentInfo();
  }

  render() {
    const {
      assignment_questions,
      assignmentName,
      isAssignmentSubmitting,
      assignmentSubmittedConfirmation,
      assignmentSubmissionFailed,
      assignmentDuration,
      resetAssignmentInfo,
      assignmentError,
      classes,
    } = this.props;
    const {
      resp,
      // questionsForGeneratingResponseSheet,
      assignmentDone,
      totalObtainableMarks,
      score,
      scoreTracker,
      correctAnswersByUser,
      incorrectAnswersByUser,
      unattemptedAnswersByUser,
      answerKey,
    } = this.state;
    // console.log('ASSIGNMENT QUESTIONS RECIEVED', assignment_questions);
    console.log('RESPONSE RECEIVED IS', resp);
    console.log('DURATION IS', assignmentDuration);

    return (
      <>
        <StudentDashboardNavbar />
        <AssignmentAndTestHeader forAssignment />
        <AssignmentNavbar>
          <TimePrompt>Alloted time : 00:{assignmentDuration}:00</TimePrompt>

          {/* <button
            onClick={() => {
              this.setState({ assignmentDone: false });
            }}
          >
            RESET
          </button> */}

          {assignmentSubmittedConfirmation ? (
            <ButtonWrapper>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.button}
                onClick={this.handleSubmitSuccess}
                // startIcon={<SaveIcon />}
              >
                Go back to Course Page
              </Button>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.button}
                onClick={this.handleSubmit}
                // startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </ButtonWrapper>
          )}
        </AssignmentNavbar>
        <PageWrapper>
          {assignmentSubmittedConfirmation ? null : (
            <>
              <Form onSubmit={this.handleSubmit} onChange={this.handleOnChange}>
                {/* <QuestionsContainer>Hi</QuestionsContainer> */}

                <QuestionsWrapper>
                  {assignment_questions.map((question, index) => {
                    return (
                      <QuestionCardWrapper>
                        <QuestionStatementContainer>
                          <QuestionPrompt>
                            <QuestionNoSpan>
                              Problem&nbsp;{index + 1}
                            </QuestionNoSpan>
                            <QuestionStatement>
                              {question.statement}
                            </QuestionStatement>
                          </QuestionPrompt>
                          <MarksPrompt>
                            {question.maxMarks}&nbsp;pts
                          </MarksPrompt>
                        </QuestionStatementContainer>
                        <QuestionsOptionsContainer>
                          {question.type === 'MULTICORRECT' ? (
                            <>
                              <FormControl
                                component='fieldset'
                                className={classes.formControlForQuestion}
                              >
                                {/* <FormLabel component='legend'>
                                        Assign responsibility
                                      </FormLabel> */}
                                <FormGroup>
                                  {question.options.map((option) => {
                                    return (
                                      <OptionWrapper>
                                        <FormControlLabel
                                          // value={option}
                                          // name={index}
                                          control={
                                            <Checkbox
                                              name={index}
                                              value={option}
                                            />
                                          }
                                          label={`${option}`}
                                        />
                                      </OptionWrapper>
                                    );
                                  })}
                                </FormGroup>
                                {/* <FormHelperText>
                                        Be careful
                                      </FormHelperText> */}
                              </FormControl>
                            </>
                          ) : question.type === 'SINGLECORRECT' ? (
                            <>
                              <FormControl
                                component='fieldset'
                                // className={classes.formControlForQuestion}
                              >
                                {/* <FormLabel component='legend'>
                                  Mark any one
                                </FormLabel> */}
                                <RadioGroup
                                  aria-label={`Q${index}`}
                                  name={index}
                                >
                                  {question.options.map((option) => {
                                    return (
                                      <OptionWrapper>
                                        <FormControlLabel
                                          value={option}
                                          control={<Radio />}
                                          label={`${option}`}
                                          className={
                                            classes.formControlForQuestion
                                          }
                                        />
                                      </OptionWrapper>
                                    );
                                  })}
                                </RadioGroup>
                              </FormControl>
                            </>
                          ) : null}
                        </QuestionsOptionsContainer>
                      </QuestionCardWrapper>
                    );
                  })}
                </QuestionsWrapper>
              </Form>
            </>
          )}

          {/* For the time when SUBMIT ASSIGNMENT BUTTON IS CLICKED */}

          <Backdrop className={classes.backdrop} open={isAssignmentSubmitting}>
            <CircularProgress color='inherit' />
          </Backdrop>

          {assignmentSubmittedConfirmation ? (
            <Alert severity='success' color='warning' className={classes.alert}>
              Assignment Submitted Successfully!
            </Alert>
          ) : assignmentSubmissionFailed ? (
            <Alert severity='error' color='warning' className={classes.alert}>
              `Submission Failed... {assignmentError}`
            </Alert>
          ) : null}

          {/* <Snackbar
            open={assignmentDone}
            autoHideDuration={5000}
            // onClose={() => resetSignUpInfo()}
          >
            <Alert severity='success'>Assignment Submmitted Successfully</Alert>
          </Snackbar> */}

          {assignmentSubmittedConfirmation ? (
            <>
              {console.log(
                'FOR RESPONSE SHEET',
                'USER RESPONSES ARE',
                resp,
                'AND ASSIGNMENT QUESTIONS ARE',
                assignment_questions
              )}
              <ResponseSheet>
                <Scorecard>
                  <PromptWrapper>
                    <Prompt>Your score is&nbsp;:&nbsp; </Prompt>
                    <Score>
                      {score} / {totalObtainableMarks}
                    </Score>
                  </PromptWrapper>
                  <PromptWrapper>Your marked responses are :</PromptWrapper>
                </Scorecard>
                <QuestionsWrapper>
                  {assignment_questions.map((question, index) => {
                    {
                      resp[index]
                        ? console.log('USER HAS ATTEMPTED  Q.NO: ', index)
                        : console.log('USER HAS NOT ATTEMPTED  Q.NO: ', index);
                    }
                    return (
                      <>
                        <QuestionCardWrapper>
                          <QuestionStatementContainer>
                            <QuestionPrompt>
                              <QuestionNoSpan>
                                Problem&nbsp;{index + 1}
                                <IconWrapper>
                                  {correctAnswersByUser[index] ? (
                                    <CorrectIcon
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                      }}
                                    />
                                  ) : incorrectAnswersByUser[index] ? (
                                    <IncorrectIcon
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                      }}
                                    />
                                  ) : (
                                    <UnattemptedIcon
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                      }}
                                    />
                                  )}
                                </IconWrapper>
                              </QuestionNoSpan>
                              <QuestionStatement>
                                {question.statement}
                              </QuestionStatement>
                            </QuestionPrompt>

                            <MarksPrompt>
                              {scoreTracker[index]}/{question.maxMarks}
                              &nbsp;pts
                            </MarksPrompt>
                          </QuestionStatementContainer>
                          <QuestionsOptionsContainer>
                            {question.type === 'MULTICORRECT' ? (
                              <>
                                <FormControl
                                  component='fieldset'
                                  className={classes.formControlForQuestion}
                                >
                                  <FormGroup>
                                    {question.options.map((option) => {
                                      return (
                                        <OptionWrapper
                                          status={
                                            answerKey[index][option]
                                              ? resp[index]
                                                ? resp[index][option]
                                                  ? 'rgba(13, 201, 132, 0.753)'
                                                  : 'rgba(13, 201, 133, 0.49)'
                                                : 'rgba(13, 201, 133, 0.49)'
                                              : resp[index]
                                              ? resp[index][option]
                                                ? 'rgba(252, 4, 4, 0.637)'
                                                : null
                                              : null
                                          }
                                        >
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                disabled
                                                checked={
                                                  resp[index]
                                                    ? resp[index][option]
                                                      ? true
                                                      : false
                                                    : false
                                                }
                                                name={index}
                                                value={option}
                                              />
                                            }
                                            label={`${option}`}
                                          />
                                        </OptionWrapper>
                                      );
                                    })}
                                  </FormGroup>
                                </FormControl>
                              </>
                            ) : question.type === 'SINGLECORRECT' ? (
                              <>
                                <FormControl
                                  component='fieldset'
                                  // className={classes.formControlForQuestion}
                                >
                                  <RadioGroup
                                    aria-label={`Q${index}`}
                                    name={index}
                                  >
                                    {question.options.map((option) => {
                                      return (
                                        <OptionWrapper
                                          status={
                                            answerKey[index][option]
                                              ? resp[index]
                                                ? resp[index] == option
                                                  ? 'rgba(13, 201, 132, 0.753)'
                                                  : 'rgba(13, 201, 133, 0.49)'
                                                : 'rgba(13, 201, 133, 0.49)'
                                              : resp[index]
                                              ? resp[index] == option
                                                ? 'rgba(252, 4, 4, 0.637)'
                                                : null
                                              : null
                                          }
                                        >
                                          <FormControlLabel
                                            value={option}
                                            control={
                                              <Radio
                                                disabled
                                                checked={
                                                  resp[index]
                                                    ? resp[index] == option
                                                      ? true
                                                      : false
                                                    : false
                                                }
                                              />
                                            }
                                            label={`${option}`}
                                          />
                                        </OptionWrapper>
                                      );
                                    })}
                                  </RadioGroup>
                                </FormControl>
                              </>
                            ) : null}
                          </QuestionsOptionsContainer>
                        </QuestionCardWrapper>
                      </>
                    );
                  })}
                </QuestionsWrapper>
              </ResponseSheet>
            </>
          ) : null}

          {/*
          <Snackbar
            open={assignmentSubmittedConfirmation}
            // autoHideDuration={5000}
            // onClose={() => resetAssignmentInfo()}
          >
            <Alert severity='success'>Assignment Submitted Successfully!</Alert>
          </Snackbar>
          <Snackbar
            open={assignmentSubmissionFailed}
            // autoHideDuration={5000}
            // onClose={() => resetAssignmentInfo()}
          >
            <Alert severity='error'>
              `Submission Failed... {assignmentError}`
            </Alert>
          </Snackbar>
          */}

          {/* <div></div> */}

          {/* {isAssignmentSubmitting ? (
            <div>ASSIGNMENT IS SUBMITTING...PLEASE WAIT.</div>
          ) : null} */}
          {}
          {/* AFTER SUBMISSION IS SUCCESSFUL */}
        </PageWrapper>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  current_assignment_id: selectCurrentCourseTopicId,
  current_assignment_name: selectCurrentCourseTopicName,
  current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  assignment_questions: selectAssignmentQuestions,
  assignmentName: selectAssignmentName,
  assignmentDuration: selectAssignmentDuration,
  assignment_message_from_backend: selectAssignmentMessageFromBackend,
  isAssignmentSubmitting: selectIsAssignmentSubmitting,
  assignmentSubmittedConfirmation: selectAssignmentSubmittedConfirmationMessage,
  assignmentSubmissionFailed: selectHasAssignmentSubmissionFailed,
  assignmentError: selectAssignmentReducerError,
});

const mapDispatchToProps = (dispatch) => ({
  submitAssignmentStart: (data) => dispatch(submitAssignmentStart(data)),
  resetAssignmentInfo: () => dispatch(resetAssignmentInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(useStyles)(AssignmentPage)));

// class AssignmentPage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       resp: {},
//       sahijawab: [],
//       jawab: [],
//       done: false,
//       score: { marksScored: 0 },
//     };
//   }

//   componentDidMount() {
//     console.log('Assignment Page has mounted');
//     // const user_id = this.props.current_user_id;
//     // const course_id = this.props.current_course_id;
//     // const assignment_id = this.props.current_assignment_id;
//     // const { fetchAssignmentStart } = this.props;
//     // fetchAssignmentStart({ user_id, course_id, assignment_id });
//   }
//   componentWillUnmount() {
//     console.log('Assignment Page Will unmount now');
//   }

//   handleOnChange = (e) => {
//     //console.log(e.target.value);
//     //console.log(e.target.name);
//     // const responses = this.resp.push({name: [e.target.value]})
//     //console.log(responses)
//     //  this.setState({ selectedOption: e.target.value});
//     //console.log(resp)
//     const value = e.target.value;
//     const name = e.target.name;
//     let response = this.state.resp;
//     response[name] = value;
//     console.log(response);
//     this.setState(
//       {
//         resp: response,
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   };

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

//   render() {
//     console.log('Assignment page has rendered');
//     const {
//       assignment_message_from_backend,
//       assignment_questions,
//     } = this.props;
//     let i = -1;
//     return (
//       <>
//         <StudentDashboardNavbar />
//         <AssignmentAndTestSidenav />
//         {this.state.done === false ? (
//           <AssignmentWrapper>
//             {assignment_message_from_backend ? (
//               <div>MESSAGE FROM BACKEND {assignment_message_from_backend}</div>
//             ) : (
//               <div>Loading...</div>
//             )}
//             {assignment_questions ? (
//               <div>QUESTIONS RECEIVED</div>
//             ) : (
//               <div>Loading...</div>
//             )}

//             <WrappingQuestions>
//               <AssignmentName>
//                 Assignment - 1 {questionData.assignment.assignmentName}
//               </AssignmentName>

//               <AssignmentForm onChange={(e) => this.handleOnChange(e)}>
//                 <AllQuestions>
//                   {questionData.assignment.questions.map((question, number) => {
//                     //console.log(option)

//                     return (
//                       <>
//                         <QuestionWrapper>
//                           <Questions key={number}>
//                             Q{question.number}) {question.statement}
//                             <br />
//                           </Questions>
//                           {question.options.map((option, index) => {
//                             //   console.log(option)
//                             //console.log(number)
//                             return (
//                               <>
//                                 <Options>
//                                   <input
//                                     type='radio'
//                                     key={question.statement}
//                                     value={option}
//                                     id={option}
//                                     name={question.number}
//                                   />
//                                   <label key={index} htmlFor={option}>
//                                     {option}
//                                   </label>
//                                   <br />
//                                 </Options>
//                                 <div></div>
//                               </>
//                             );
//                           })}
//                         </QuestionWrapper>
//                       </>
//                     );
//                   })}
//                 </AllQuestions>
//                 <button onClick={(e) => this.handleClick(e)}>submit</button>
//               </AssignmentForm>
//             </WrappingQuestions>
//           </AssignmentWrapper>
//         ) : (
//           <>
//             <div>
//               <div>your score is: {this.state.score.marksScored}</div>
//             </div>
//             <div>
//               {this.state.jawab ? (
//                 <div>
//                   {this.state.jawab.map((responses, index) => {
//                     if (this.state.sahijawab[index] === responses) {
//                       return (
//                         <div>
//                           <div>
//                             {questionData.assignment.questions[index].statement}
//                           </div>
//                           <div>
//                             {questionData.assignment.questions[
//                               index
//                             ].options.map((option) => {
//                               return <div>{option}</div>;
//                             })}
//                           </div>

//                           {responses ? (
//                             <div>
//                               USER GAVE THE CORRECT ANSWER! User response:{' '}
//                               {this.state.jawab[index]}, correct answer:{' '}
//                               {this.state.sahijawab[index]}
//                             </div>
//                           ) : (
//                             <div>
//                               Unattempted, correct answer :
//                               {this.state.sahijawab[index]}
//                             </div>
//                           )}
//                         </div>
//                       );
//                     } else {
//                       return (
//                         <div>
//                           <div>
//                             {questionData.assignment.questions[index].statement}
//                           </div>
//                           <div>
//                             {questionData.assignment.questions[
//                               index
//                             ].options.map((option) => {
//                               return <div>{option}</div>;
//                             })}
//                           </div>

//                           {responses ? (
//                             <div>
//                               {' '}
//                               USER GAVE WRONG ANSWER! User response is:{' '}
//                               {this.state.jawab[index]}, correct answer:{' '}
//                               {this.state.sahijawab[index]}
//                             </div>
//                           ) : (
//                             <div>
//                               Unattempted, correct answer :
//                               {this.state.sahijawab[index]}
//                             </div>
//                           )}
//                         </div>
//                       );
//                     }
//                   })}
//                 </div>
//               ) : null}
//             </div>
//           </>
//         )}
//       </>
//     );
//   }
// }
