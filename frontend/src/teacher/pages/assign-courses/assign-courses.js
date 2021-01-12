import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ArrowsEqual } from "../../icons/arrows.svg";
import arrows from "../../icons/arrows.svg";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button/Button";
//redux
import { fetchUserCafeStart } from "../../redux/cafe/cafe.actions";
import {
  selectUserCafeDetails,
  selectUserCafeNumberOfClassmates,
} from "../../redux/cafe/cafe.selectors";
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
} from "./assign.courses.styles";
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import { selectVerifiedStudents } from "../../redux/verified-students/verified-student.selectors";
import { fetchVerifiedStudentStart } from "../../redux/verified-students/verified-students.actions";
import { selectAllCourses } from "../../../student/redux/allCourses/all-courses.selectors";
import { fetchAllCoursesStart } from "../../../student/redux/allCourses/all-courses.actions";
import { courseAssignStart } from "../../redux/course-assign/course-assign.actions";
class TeacherDashboardAssignPage extends React.Component {
  constructor(){
    super()
    this.state = {
      userId: null,
      cafeId: '5fa5796e9542c50df4285b04',
      courseId: null
    }
  }
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      fetchVerifiedStudentStart,
      fetchAllCoursesStart
    } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
    fetchVerifiedStudentStart();
    fetchAllCoursesStart();
  }

  handleNameChange = (e) => {
    const value = e.target.value
    console.log(value)
    this.setState({userId: value}, () => {console.log(this.state)})
  }

  handleCourseChange = (e) => {
    const value = e.target.value
    this.setState({courseId: value}, () => {console.log(this.state)})
  }

  handleSubmit = (e) => {
    const userId = this.state.userId
    const courseId = this.state.courseId
    const cafeId = this.state.cafeId
    const {courseAssignStart} = this.props
    console.log('page data', userId, courseId, cafeId)
    console.log('this function is working')
    courseAssignStart(userId, cafeId, courseId)
  }

  render() {
    const { userCafe, verifiedStudents, allCourses } = this.props;
    console.log('courses are', allCourses)
    console.log('verified user are', verifiedStudents)
    console.log(this.state.userId)
    return (
      <>
        <PageContainer>
          <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
            <CafeDetailsParentWrapper>
              <TeacherCafeDetails />
            </CafeDetailsParentWrapper>
            <TextTitle>Assign Course to Student</TextTitle>
            <DropDownWrapper>
              <StudentDropDown>
                <StudentTitle>Student</StudentTitle>
                <DropWrapper>
                  <FormControl
                    variant="outlined"
                    className="hello"
                    style={{ minWidth: 150 }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Select
                    </InputLabel>
                    <Select
                      // native
                      // value={state.age}
                       onChange={this.handleNameChange}
                      label="student"
                      inputProps={{
                        name: "student",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="none">NONE</option>
          {verifiedStudents ?
            verifiedStudents.map((student, index) => {
              return(
                <option key={index} value={student._id}>{student.firstName}</option>
              )
            }) : null
          }
          
                    </Select>
                  </FormControl>
                </DropWrapper>
              </StudentDropDown>
              <ImageWrapper src={arrows} />
              <CourseDropDown>
                <CourseTitle>Course Name</CourseTitle>
                <DropWrapper>
                  <FormControl
                    variant="outlined"
                    className="hello"
                    style={{ minWidth: 150 }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Select
                    </InputLabel>
                    <Select
                      // native
                      // value={state.age}
                      onChange={this.handleCourseChange}
                      label="Age"
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="none">
                        NONE
                      </option>
                      {allCourses
                        ? allCourses.map((course, index) => { 
                            return(
                              <option key={index} value={course._id}>
                                {course.courseName}
                              </option>)
                          
                            })
                        : null}
                    </Select>
                  </FormControl>
                </DropWrapper>
              </CourseDropDown>
            </DropDownWrapper>
            <ButtonWrapper onClick={this.handleSubmit}>Assign</ButtonWrapper>
          </PageWrapper>
        </PageContainer>
      </>
    );
  
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  verifiedStudents: selectVerifiedStudents,
  allCourses: selectAllCourses
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchVerifiedStudentStart: () => dispatch(fetchVerifiedStudentStart()),
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
  courseAssignStart: (userId, cafeId, courseId) =>
    dispatch(courseAssignStart(userId, cafeId, courseId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherDashboardAssignPage);
