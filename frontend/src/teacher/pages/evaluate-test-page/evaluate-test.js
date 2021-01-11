import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from '@material-ui/core/TextField/TextField'
//redux
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
import {
  selectUserCafeDetails,
} from '../../redux/cafe/cafe.selectors';
//import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';

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
  MarksWrapper
} from './evaluate-test.styles';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component'
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component'

class EvaluateTestPage extends React.Component {
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      subject= 'MA-103',
    } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
  }
  render() {
    const {
      userCafe,

    } = this.props;
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
          <TestWrapper>
              <QuestionAndMarksWrapper>
              <QuestionAnswers>
             <Questions>Question 1</Questions>
             <Answers>Answer 1</Answers>
             </QuestionAnswers>
             <MarksWrapper>
             <TextField id="outlined-basic" label="Enter Marks" variant="outlined"  style={{maxWidth: 150}} />
             </MarksWrapper>
             </QuestionAndMarksWrapper>
          </TestWrapper>
          <TestWrapper>
            
          </TestWrapper>
          <TestWrapper>
            
          </TestWrapper>
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluateTestPage);
