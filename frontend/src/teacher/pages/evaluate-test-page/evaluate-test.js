import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TextField from "@material-ui/core/TextField/TextField";
//redux
import { fetchUserCafeStart } from "../../redux/cafe/cafe.actions";
import { selectUserCafeDetails } from "../../redux/cafe/cafe.selectors";
//import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import TeacherCafeDetails from "../../components/cafe-details/cafe-details.component";

import {
  PageContainer,
  CafeDetailsParentWrapper,
  EnrolledCoursesParentWrapper,
  DiscoverCourseParentWrapper,
  PageWrapper,
  TextTitle,
  DropDownWrapper,
  StudentTitle,
  CourseTitle,
  StudentDropDown,
  CourseDropDown,
  ButtonWrapper,
  DropWrapper,
  ImageWrapper,
  TestWrapper,
  QuestionsWrapper,
  Questions,
  Answers,
  QuestionAnswers,
  QuestionAndMarksWrapper,
  MarksWrapper,
  CorrectAnswer,
} from "./evaluate-test.styles";
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import { selectTestCourseId, selectTestDetails } from "../../redux/test-sheet/test-sheet.selectors";
import { updateTestScoreStart } from "../../redux/test-evaluation/test-evaluation-list.actions";
import { Link } from "react-router-dom";

class EvaluateTestPage extends React.Component {
  constructor(props){
    super(props)
    const {courseId} = props
    this.state = {
      score: {marksScored: 0},
      studentId: null,
      courseId: null,
      testId: null
    }
  }

  componentDidMount() {
    const { userId, fetchUserCafeStart, } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
  }

  handleChange =(e) => {
    const value = e.target.value
    console.log(value)
    this.setState({score: value}, () => {console.log(this.state)})
    const { userCafe, test, courseId } = this.props;
    console.log(courseId)
    this.setState({courseId: courseId})
    this.setState({studentId: test.studentId})
    this.setState({testId: test.testId._id}, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    const {updateTestScoreStart, } = this.props
    const studentId = this.state.studentId
    const testId = this.state.testId
    const courseId = this.state.courseId
    const marksScored = this.state.score
    const data = {}
    data['marksScored'] = marksScored
    console.log('pagedata', studentId, courseId, testId, data)
    updateTestScoreStart(studentId, courseId, testId, data)
  }

  render() {
    const { userCafe, test } = this.props;
    console.log(test);
    //console.log(userCafe)
    //console.log(test.testId)

    return (
      <>
        <PageContainer>
          <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails />
            </CafeDetailsParentWrapper>
            <QuestionsWrapper>
              {test
                ? test.responses.map((test) => {
                    return (
                      <TestWrapper>
                      <QuestionAndMarksWrapper>
                        <QuestionAnswers>
                          <Questions>Question: {test.questionId.statement}</Questions>
                          <Answers>Correct Answer : 
                            <CorrectAnswer>{
                              test.questionId.correctAns.map((ans) => {
                                return ans
                              })
                            }</CorrectAnswer>
                            <br/>
                            User Response : 
                            {
                              test.response.map((ans) => {
                                return ans
                              })
                            }
                            <br/>
                            Max marks for question :
                            {
                              test.questionId.maxMarks
                            }
                            <br/>
                            Question Type :
                            {
                              test.questionId.type
                            }
                            <br />
                            {
                              test.questionId.type == 'SINGLECORRECT' || 'MULTICORRECT' 
                              ? test.questionId.options.map((option, index) => {
                                <ul>
                                  <li key={index}>{option}</li>
                                </ul>
                              })
                              :null
                            }

                          </Answers>
                          {/* <TextField
                            id={test._id}
                            label="Enter Marks"
                            variant="outlined"
                            onChange={this.handleChange}
                            style={{ maxWidth: 150 }}
                          /> */}
                        </QuestionAnswers>
                        <MarksWrapper>
                          <TextField
                            id="outlined-basic"
                            label="Enter Marks"
                            variant="outlined"
                            style={{ maxWidth: 115 }}
                            onChange={this.handleChange}
                          />
                        </MarksWrapper>
                      </QuestionAndMarksWrapper>
                    </TestWrapper>
                    );
                  })
                : null}
            </QuestionsWrapper>
            <Link to='/teacher/testcheck'>
            <ButtonWrapper onClick={this.handleSubmit}>Submit Score</ButtonWrapper>
            </Link>
          </PageWrapper>
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  test: selectTestDetails,
  courseId: selectTestCourseId
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  updateTestScoreStart: (studentId, courseId, testId, data) => dispatch(updateTestScoreStart(studentId, courseId, testId, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluateTestPage);
