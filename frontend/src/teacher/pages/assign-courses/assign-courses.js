import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import arrows from '../../icons/arrows.svg';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button/Button';

//redux
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
import {
  selectUserCafeDetails,
  selectUserCafeId,
} from '../../redux/cafe/cafe.selectors';
//import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';

import {
  PageContainer,
  CafeDetailsParentWrapper,
  TextTitle,
  DropDownWrapper,
  StudentTitle,
  CourseTitle,
  StudentDropDown,
  CourseDropDown,
  ButtonWrapperdiv,
  DropWrapper,
  ImageWrapper,
} from './assign.courses.styles';
import { selectVerifiedStudents } from '../../redux/verified-students/verified-student.selectors';
import { fetchVerifiedStudentStart } from '../../redux/verified-students/verified-students.actions';
import { selectAllCourses } from '../../../student/redux/allCourses/all-courses.selectors';
import { fetchAllCoursesStart } from '../../../student/redux/allCourses/all-courses.actions';
import { courseAssignStart } from '../../redux/course-assign/course-assign.actions';
import { selectCourseUpdateConfirmation } from '../../redux/course-assign/course-assign.selector';
import Popup from 'reactjs-popup';
class TeacherDashboardAssignPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      cafeId: null,
      courseId: null,
      name: null,
      course: null,
    };
  }
  componentDidMount() {
    const {
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
    this.setState({ userId: value, name: value });
  };

  handleCourseChange = (e) => {
    const { cafeId } = this.props;
    const value = e.target.value;
    this.setState({ courseId: value, cafeId: cafeId, course: value });
  };

  handleSubmit = (e) => {
    const userId = this.state.userId;
    const courseId = this.state.courseId;
    const cafeId = this.state.cafeId;
    const { courseAssignStart } = this.props;
    courseAssignStart(userId, cafeId, courseId);
    this.setState({
      name: 'Select',
      course: 'Select',
      userId: null,
      cafeId: null,
      courseId: null,
    });
  };

  render() {
    const { verifiedStudents, allCourses, updateConfirmation } = this.props;
    return (
      <>
        <PageContainer>
          {/* <TeacherDashboardNavbar /> */}
          {/* <TeacherDashboardSidenav /> */}
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          <TextTitle>Assign Course to Student</TextTitle>

          {/* {updateConfirmation ? (
              <div style={{ color: "green" }}>Course assigned to student!</div>
            ) : null} */}
          <DropDownWrapper>
            <StudentDropDown>
              <StudentTitle>Student</StudentTitle>
              <DropWrapper>
                <FormControl
                  variant='outlined'
                  className='hello'
                  style={{ minWidth: 150 }}
                  id='assign-course-form'
                >
                  <InputLabel htmlFor='outlined-age-native-simple'>
                    Select
                  </InputLabel>
                  <Select
                    select=''
                    onChange={this.handleNameChange}
                    label='student'
                    value={this.state.name}
                  >
                    {verifiedStudents
                      ? verifiedStudents.map((student, index) => {
                          return (
                            <option
                              style={{ cursor: 'pointer' }}
                              key={index}
                              id={student.firstName}
                              value={student._id}
                            >
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
                  variant='outlined'
                  className='hello'
                  style={{ minWidth: 150 }}
                  value={this.state.course}
                >
                  <InputLabel htmlFor='outlined-age-native-simple'>
                    Select
                  </InputLabel>
                  <Select
                    style={{ cursor: 'pointer' }}
                    onChange={this.handleCourseChange}
                    value={this.state.course}
                    select=''
                  >
                    {allCourses
                      ? allCourses.map((course, index) => {
                          return (
                            <option
                              style={{ cursor: 'pointer' }}
                              key={index}
                              id={course.courseName}
                              value={course._id}
                            >
                              {course.courseName}
                            </option>
                          );
                        })
                      : null}
                  </Select>
                </FormControl>
              </DropWrapper>
            </CourseDropDown>
          </DropDownWrapper>
          <Popup
            trigger={
              <ButtonWrapperdiv>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  fullWidth='true'
                  onClick={this.handleSubmit}
                >
                  Assign
                </Button>
              </ButtonWrapperdiv>
            }
            position='right center'
          >
            {' '}
            {updateConfirmation ? (
              <div style={{ color: 'green' }}>Course assigned to student!</div>
            ) : (
              <div style={{ color: 'red' }}>Course assigned to student!</div>
            )}{' '}
          </Popup>

          {/* </PageWrapper> */}
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
  cafeId: selectUserCafeId,
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
