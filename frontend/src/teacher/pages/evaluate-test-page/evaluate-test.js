import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

//redux
import { selectUserCafeDetails } from '../../redux/cafe/cafe.selectors';

import {
  selectTestCourseId,
  selectTestDetails,
} from '../../redux/test-sheet/test-sheet.selectors';
import { updateTestScoreStart } from '../../redux/test-evaluation/test-evaluation-list.actions';
// import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components

import TextField from '@material-ui/core/TextField/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
// import StyledButton from "../../components/button-component"

import {
  PageContainer,
  CafeDetailsParentWrapper,
  ButtonWrapperdiv,
  QuestionsWrapper,
  QuestionCardWrapper,
  QuestionStatement,
  Responses,
  ResponseContainer,
  Prompt,
  Response,
  ResponseAndMarksWrapper,
  MarksWrapper,
} from './evaluate-test.styles';

const useStyles = (theme) => ({
  root: {
    // '& .MuiTextField-root': {
    //   // marginRight: theme.spacing(4),
    //   // marginTop: theme.spacing(2),
    //   width: '100%',
    // },
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    color: 'white',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

class EvaluateTestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      studentId: null,
      courseId: null,
      testId: null,
      indiScore: {},
    };
  }

  // componentDidMount() {
  //   const { fetchUserCafeStart } = this.props;
  //   // if(allCourses is null), then fetchAllCoursesStart() as well.
  //   fetchUserCafeStart();
  // }

  handleChange = (e) => {
    const value = e.target.value;
    const qNo = e.target.id;
    // let individualScore = [];
    // individualScore.push(value);
    // console.log(individualScore);
    // this.setState({ indiScore: individualScore });
    let prevMarks = 0;
    if (this.state.indiScore[qNo]) {
      prevMarks = this.state.indiScore[qNo];
    }

    this.setState((prevState, prevProps) => {
      let prevIndiScore = prevState.indiScore;
      prevIndiScore[qNo] = value;
      // let prevScore = Number(prevState.score);
      // let scoreForQuestion = Number(value);
      // let updatedScore = prevScore + scoreForQuestion;
      // updatedScore = updatedScore.toString();
      // console.log('UPDATED SCORE : ', updatedScore);
      return { indiScore: prevIndiScore };
    });

    this.setState((prevState, prevProps) => {
      let prevScore = Number(prevState.score);
      let scoreForQuestion = Number(value);
      // prevMarks = Number(prevMarks);
      let updatedScore = prevScore + scoreForQuestion - prevMarks;
      updatedScore = updatedScore.toString();
      return { score: updatedScore };
    });
    // this.setState({ score: value });
    const { test, courseId } = this.props;
    this.setState({ courseId: courseId });
    this.setState({ studentId: test.studentId });
    this.setState({ testId: test.testId._id });
  };

  handleSubmit = (e) => {
    const { updateTestScoreStart } = this.props;
    const studentId = this.state.studentId;
    const testId = this.state.testId;
    const courseId = this.state.courseId;
    const marksScored = this.state.score;
    const data = {};
    data['marksScored'] = marksScored;
    updateTestScoreStart(studentId, courseId, testId, data);
  };

  render() {
    const { test, classes } = this.props;
    return (
      <>
        <PageContainer>
          {/* <TeacherDashboardNavbar></TeacherDashboardNavbar> */}
          {/* <TeacherDashboardSidenav></TeacherDashboardSidenav> */}
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          <QuestionsWrapper>
            {test
              ? test.responses.map((test, index) => {
                  return (
                    <QuestionCardWrapper>
                      <QuestionStatement>
                        <span style={{ fontWeight: '500' }}>
                          {index + 1}.&nbsp;
                        </span>
                        {test.questionId.statement}
                      </QuestionStatement>
                      <ResponseAndMarksWrapper>
                        <Responses>
                          <ResponseContainer>
                            <Prompt>
                              <span style={{ fontWeight: '500' }}>
                                Correct Answer
                              </span>{' '}
                              :
                            </Prompt>
                            <Response>
                              {test.questionId.type === 'MULTICORRECT'
                                ? test.questionId.correctAns.map((ans) => {
                                    return `${ans},`;
                                  })
                                : test.questionId.type === 'SINGLECORRECT'
                                ? test.questionId.correctAns.map((ans) => {
                                    return ans;
                                  })
                                : `Subjective Question`}
                              {/* {test.questionId.correctAns.map((ans) => {
                                return ans;
                              })} */}
                            </Response>
                          </ResponseContainer>
                          <ResponseContainer>
                            <Prompt>
                              <span style={{ fontWeight: '500' }}>
                                User Response
                              </span>{' '}
                              :
                            </Prompt>
                            <Response>
                              {test.questionId.type === 'MULTICORRECT'
                                ? test.response.map((ans) => {
                                    return `${ans},`;
                                  })
                                : test.response.map((ans) => {
                                    return ans;
                                  })}
                            </Response>
                          </ResponseContainer>
                          <ResponseContainer>
                            <Prompt>
                              <span style={{ fontWeight: '500' }}>
                                Question Type
                              </span>{' '}
                              :
                            </Prompt>
                            <Response>{test.questionId.type}</Response>
                          </ResponseContainer>
                          {/* <Answers>
                            Correct Answer :
                            <CorrectAnswer>
                              {test.questionId.correctAns.map((ans) => {
                                return ans;
                              })}
                            </CorrectAnswer>
                            <br />
                            User Response :
                            {test.response.map((ans) => {
                              return ans;
                            })}
                            <br />
                            Max marks for question :{test.questionId.maxMarks}
                            <br />
                            Question Type :{test.questionId.type}
                            <br />
                            {test.questionId.type == 'SINGLECORRECT' ||
                            'MULTICORRECT'
                              ? test.questionId.options.map((option, index) => {
                                  <ul>
                                    <li key={index}>{option}</li>
                                  </ul>;
                                })
                              : null}
                          </Answers> */}
                        </Responses>
                        {/* <QuestionAnswers></QuestionAnswers> */}
                        <MarksWrapper>
                          <TextField
                            id={`${index}`}
                            label='Enter Marks'
                            variant='outlined'
                            className={classes.root}
                            // fullWidth='true'
                            // style=
                            onChange={this.handleChange}
                            helperText={`Max Marks : ${test.questionId.maxMarks}`}
                          />
                        </MarksWrapper>
                      </ResponseAndMarksWrapper>
                    </QuestionCardWrapper>
                  );
                })
              : null}
          </QuestionsWrapper>
          <Link to='/teacher/dashboard/testcheck'>
            <ButtonWrapperdiv>
              <Button
                variant='contained'
                color='primary'
                size='large'
                // fullWidth="true"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </ButtonWrapperdiv>

            {/* <ButtonWrapper onClick={this.handleSubmit}>Submit Score</ButtonWrapper> */}
          </Link>
          {/* </PageWrapper> */}
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  test: selectTestDetails,
  courseId: selectTestCourseId,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  updateTestScoreStart: (studentId, courseId, testId, data) =>
    dispatch(updateTestScoreStart(studentId, courseId, testId, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(EvaluateTestPage));
