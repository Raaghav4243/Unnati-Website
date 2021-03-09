import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
  selectTestMessageFromBackend,
  selectTestQuestions,
  selectIsTestSubmitting,
  selectTestSubmittedConfirmationMessage,
  selectHasTestSubmissionFailed,
  selectTestName,
  selectTestDuration,
} from '../../redux/testpage/testpage.selectors';

import { submitTestStart } from '../../redux/testpage/testpage.actions';

import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';

import AssignmentAndTestHeader from '../../components/assignment-test-header/assignment-test-header.component';
import Timer from 'react-compound-timer';

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

import {
  TestNavbar,
  ButtonWrapper,
  PageWrapper,
  Form,
  QuestionsWrapper,
  QuestionCardWrapper,
  QuestionStatementContainer,
  QuestionPrompt,
  QuestionNoSpan,
  QuestionStatement,
  MarksPrompt,
  QuestionsOptionsContainer,
  OptionWrapper,
  BottomNav,
  TimerWrapper,
  TimeHeader,
  TimeWrapper,
  TestTitle,
  NavRight,
  // QuestionCardContainer,
  RadioLabel,
  RadioInput,
  RadioIndicator,
  CheckedLabel,
  CheckedInput,
  CheckedIndicator,
  TextLabel,
  // TextInput,
  // TextIndicator,
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

  backToCourse = () => {
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

  componentWillUnmount = () => {
    // SUBMIT TEST
  };

  render() {
    const {
      test_questions,
      // testName,
      testDuration,
      isTestSubmitting,
      testSubmittedConfirmation,
      testSubmissionFailed,
      testError,
      classes,
      // assignmentSubmittedConfirmation,
      // assignmentSubmissionFailed,
    } = this.props;
    const { score } = this.state;
    console.log('TEST QUESTIONS RECIEVED', test_questions);
    console.log('TEST DURATION IS', testDuration);

    return (
      <>
        <StudentDashboardNavbar />
        <AssignmentAndTestHeader forTest />
        <TestNavbar>
          {/* <TimePrompt>Time Left : 00:{assignmentDuration}:00</TimePrompt> */}
          {testSubmittedConfirmation ? (
            <TimerWrapper>
              <TimeHeader>
                Time Left :&nbsp;<TimeWrapper> --:--:-- </TimeWrapper>
              </TimeHeader>
            </TimerWrapper>
          ) : (
            <TimerWrapper>
              <TimeHeader>Time Left :&nbsp;</TimeHeader>
              <Timer
                initialTime={testDuration * 60 * 1000}
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
                    <TimeWrapper>
                      <Timer.Hours />:
                      <Timer.Minutes />:
                      <Timer.Seconds />
                    </TimeWrapper>
                  </React.Fragment>
                )}
              </Timer>
            </TimerWrapper>
          )}

          {/* <button
            onClick={() => {
              this.setState({ assignmentDone: false });
            }}
          >
            RESET
          </button> */}
          <NavRight>
            <ButtonWrapper>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                // type='submit'
                className={classes.button}
                onClick={this.backToCourse}
                // startIcon={<SaveIcon />}
              >
                Back to Course
              </Button>
            </ButtonWrapper>

            {testSubmittedConfirmation ? null : (
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
          </NavRight>
        </TestNavbar>
        <PageWrapper>
          {testSubmittedConfirmation ? null : (
            <>
              <Form onSubmit={this.handleSubmit} onChange={this.handleOnChange}>
                <QuestionsWrapper>
                  {test_questions
                    ? test_questions.map((question, index) => {
                        return (
                          <>
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
                                    {/* <label htmlFor={index}>
                                      TYPE YOUR ANSWER:
                                      <input
                                        type='text'
                                        id={index}
                                        name={index}
                                      ></input>
                                    </label> */}
                                    <TextField
                                      name={index}
                                      label={`Type your answer for Q${
                                        index + 1
                                      } here`}
                                      // error={
                                      //   this.state.errors.email ? true : false
                                      // }
                                      // helperText={`Type your answer here`}
                                      variant='outlined'
                                      multiline
                                      // value={resp.email}
                                    />
                                  </>
                                ) : null}
                              </QuestionsOptionsContainer>
                            </QuestionCardWrapper>
                          </>
                        );
                      })
                    : null}
                </QuestionsWrapper>
              </Form>
            </>
          )}
          {/* <form onChange={this.handleOnChange}>
            <TestTitle>TEST : {testName}</TestTitle>
          </form> */}
        </PageWrapper>
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
  testName: selectTestName,
  testDuration: selectTestDuration,
  test_message_from_backend: selectTestMessageFromBackend,
  isTestSubmitting: selectIsTestSubmitting,
  testSubmittedConfirmation: selectTestSubmittedConfirmationMessage,
  testSubmissionFailed: selectHasTestSubmissionFailed,
  // testError : selectTesttReducerError,
});

const mapDispatchToProps = (dispatch) => ({
  submitTestStart: (data) => dispatch(submitTestStart(data)),
  // resetTestInfo: () => dispatch(resetTestInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(useStyles)(TestPage)));
