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
  selectUserCafeId,
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
import TeacherDashboardNavbar from "../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component";
import TeacherDashboardSidenav from "../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component";
import { selectVerifiedStudents } from "../../redux/verified-students/verified-student.selectors";
import { fetchVerifiedStudentStart } from "../../redux/verified-students/verified-students.actions";
import { selectAllCourses } from "../../../student/redux/allCourses/all-courses.selectors";
import { fetchAllCoursesStart } from "../../../student/redux/allCourses/all-courses.actions";
import { courseAssignStart } from "../../redux/course-assign/course-assign.actions";
import { selectCourseUpdateConfirmation } from "../../redux/course-assign/course-assign.selector";
class TeacherDashboardAssignPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      cafeId: null,
      courseId: null,
      name: null,
      course: null
    };
  }
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      fetchVerifiedStudentStart,
      fetchAllCoursesStart,
    } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    fetchUserCafeStart();
    fetchVerifiedStudentStart();
    fetchAllCoursesStart();
  }

  handleNameChange = (e) => {
    const value = e.target.value;
    const name = e.target.name
    console.log(name);
    this.setState({ userId: value, name: name }, () => {
      console.log(this.state);
    });
  };

  handleCourseChange = (e) => {
    const {cafeId} = this.props
    const value = e.target.value;
    this.setState({ courseId: value, cafeId: cafeId }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (e) => {
    const userId = this.state.userId;
    const courseId = this.state.courseId;
    const cafeId = this.state.cafeId;
    const { courseAssignStart, updateConfirmation } = this.props;
    console.log("page data", userId, courseId, cafeId);
    console.log("this function is working");
    courseAssignStart(userId, cafeId, courseId);
    console.log(updateConfirmation)
    window.location.reload()


  };

 

  render() {
    const {
      userCafe,
      verifiedStudents,
      allCourses,
      updateConfirmation,
    } = this.props;
    console.log("courses are", allCourses);
    console.log("verified user are", verifiedStudents);
    console.log(this.state.userId);
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
            {updateConfirmation ? (
              alert('Course assigned to student!')
            ) : null}
            <DropDownWrapper>
              <StudentDropDown>
                <StudentTitle>Student</StudentTitle>
                <DropWrapper>
                  <FormControl
                    variant="outlined"
                    className="hello"
                    style={{ minWidth: 150 }}
                    id='assign-course-form'
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Select
                    </InputLabel>
                    <Select
                      // native
                      // value={state.age}
                      //value={this.state.name}
                      onChange={this.handleNameChange}
                      label="student"
                      
                    >
                      <option aria-label="None" value="none">
                        NONE
                      </option>
                      {verifiedStudents
                        ? verifiedStudents.map((student, index) => {
                            return (
                              <option key={index} name={student.firstName} value={student._id}>
                                {student.firstName}
                              </option>
                            );
                          })
                        : null}
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
                            return (
                              <option key={index} value={course._id}>
                                {course.courseName}
                              </option>
                            );
                          })
                        : null}
                    </Select>
                    <ButtonWrapper onClick={this.handleSubmit}>Assign</ButtonWrapper>
                  </FormControl>
                </DropWrapper>
              </CourseDropDown>
            </DropDownWrapper>
            
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
  allCourses: selectAllCourses,
  updateConfirmation: selectCourseUpdateConfirmation,
  cafeId: selectUserCafeId

});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchVerifiedStudentStart: () => dispatch(fetchVerifiedStudentStart()),
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
  courseAssignStart: (userId, cafeId, courseId) =>
    dispatch(courseAssignStart(userId, cafeId, courseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherDashboardAssignPage);
