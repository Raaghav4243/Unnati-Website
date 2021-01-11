import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import arrows from '../../icons/arrows.svg';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField/TextField'
//redux
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
import {
  selectUserCafeDetails,
  selectUserCafeNumberOfClassmates,
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
  RemarksFieldWrapper,
  RemarksWrapper,
} from './course-fees-styles';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component'
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component'
import { fetchVerifiedStudentStart } from '../../redux/verified-students/verified-students.actions';
import { selectVerifiedStudents } from '../../redux/verified-students/verified-student.selectors';
class TeacherDashboardFeesPage extends React.Component {
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      fetchVerifiedStudentStart
    } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
    fetchVerifiedStudentStart()
  }
  render() {
    const {
      verifiedStudents
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
          <TextTitle>Enter Fee</TextTitle>
          <DropDownWrapper>
            <StudentDropDown>
          <StudentTitle>Student</StudentTitle>
          <DropWrapper>
          <FormControl variant="outlined" className='hello' style={{minWidth: 150}}>
        <InputLabel htmlFor="outlined-age-native-simple">Select</InputLabel>
        <Select
          // native
          // value={state.age}
          // onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="none">NONE</option>
          {/* {
            verifiedStudents.map((student, index) => {
              return(
                <option key={index} value={student.firstName}>{student.firstName}</option>
              )
            })
          } */}
          
        </Select>
      </FormControl>
      </DropWrapper>
      </StudentDropDown>
      <ImageWrapper src={arrows} />
      <CourseDropDown>
          <CourseTitle>Fee Amount</CourseTitle>
          <DropWrapper>
          <TextField id="filled-basic" label="Filled" variant="filled" />
      </DropWrapper>
          </CourseDropDown>
          <RemarksWrapper>
            <CourseTitle>Remarks</CourseTitle>
            <RemarksFieldWrapper>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          </RemarksFieldWrapper>
          </RemarksWrapper>
          </DropDownWrapper>
          <ButtonWrapper >
            Confirm Fee
         </ButtonWrapper>
         </PageWrapper>
         
         
        </PageContainer>
      </>
    );
    
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  verifiedStudents: selectVerifiedStudents
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchVerifiedStudentStart: () => dispatch(fetchVerifiedStudentStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherDashboardFeesPage);
