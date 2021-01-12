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
} from "./evaluate-test.styles";
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import { selectTestDetails } from "../../redux/test-sheet/test-sheet.selectors";

class EvaluateTestPage extends React.Component {
  constructor(){
    super()
    this.state = {
      marks: [],
      studentId: null,
      courseId: null,
      testId: null
    }
  }

  componentDidMount() {
    const { userId, fetchUserCafeStart, subject = "MA-103" } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
  }

  handleChange =(e) => {
    const value = e.target.value
    console.log(value)
    this.setState({marks: value}, () => {console.log(this.state)})
  }

  handleClick = (e) => {
    this.setState({studentId: test.studentId})
    this.setState({testId: test.testId})
  }

  render() {
    const { userCafe, test } = this.props;
    console.log(test);
    console.log(test.testId)

    return (
      <>
        <PageContainer>
          <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails />
            </CafeDetailsParentWrapper>
            <TextTitle>MA-103 Test Submitted by Kartik Verma</TextTitle>
            <QuestionsWrapper>
              {test
                ? test.responses.map((test) => {
                    return (
                      <TestWrapper>
                      <QuestionAndMarksWrapper>
                        <QuestionAnswers>
                          <Questions>Question: {test.questionId.statement}</Questions>
                          <Answers>Correct Answer: 
                            {
                              test.questionId.correctAns.map((ans) => {
                                return ans
                              })
                            }
                            <br/>
                            User Response: 
                            {
                              test.response.map((ans) => {
                                return ans
                              })
                            }
                            <br/>
                            Max marks for question:
                            {
                              test.questionId.maxMarks
                            }
                            <br/>
                            Question Type:
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
                          <TextField
                            id={test._id}
                            label="Enter Marks"
                            variant="outlined"
                            onChange={this.handleChange}
                            style={{ maxWidth: 150 }}
                          />
                        </QuestionAnswers>
                        {/* <MarksWrapper>
                          <TextField
                            id="outlined-basic"
                            label="Enter Marks"
                            variant="outlined"
                            style={{ maxWidth: 150 }}
                          />
                        </MarksWrapper> */}
                      </QuestionAndMarksWrapper>
                    </TestWrapper>
                    );
                  })
                : null}
            </QuestionsWrapper>
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluateTestPage);
