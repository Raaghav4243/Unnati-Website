import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
  CourseDropDown
} from './assign.courses.styles';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component'
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component'
class TeacherDashboardAssignPage extends React.Component {
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
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
          <TextTitle>Assign Course to Student</TextTitle>
          <DropDownWrapper>
            <StudentDropDown>
          <StudentTitle>Student</StudentTitle>
          <FormControl variant="outlined" className='hello'>
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
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      </StudentDropDown>
      <CourseDropDown>
          <CourseTitle>Course Name</CourseTitle>
          <FormControl variant="outlined" className='hello'>
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
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
          </CourseDropDown>
          </DropDownWrapper>
          
         </PageWrapper>
        </PageContainer>
      </>
    );
    // let index = 0;
    // return (
    //   <>
    //     <PageContainer>
    //       ENROLLED COURSES ETC.
    //       {userCafe ? (
    //         <div>CAFE DETAILS RECEIVED</div>
    //       ) : (
    //         <div>CAFE LOADING...</div>
    //       )}
    //       {enrolled_courses ? (
    //         <div>ENROLLED COURSES RECIEVED</div>
    //       ) : (
    //         <div>ENROLLED COURSES Loading...</div>
    //       )}
    //       {enrolled_courses
    //         ? enrolled_courses.map((course, index) => (
    //             <>
    //               {/* <div>{course.course.courseName}</div>
    //               <div>Percent status is {percentStatusArray[index]}</div> */}
    //               <EnrolledCourseCard
    //                 courseName={course.course.courseName}
    //                 PercentageStatus={percentStatusArray[index]}
    //                 courseId={course.course._id}
    //               />
    //             </>
    //           ))
    //         : null}
    //       {enrolled_courses
    //         ? enrolled_courses.map((course, index) => (
    //             <>
    //               {/* <div>{course.course.courseName}</div>
    //               <div>Percent status is {percentStatusArray[index]}</div> */}
    //               <EnrolledCourseCard
    //                 courseName={course.course.courseName}
    //                 PercentageStatus={percentStatusArray[index]}
    //                 courseId={course.course._id}
    //               />
    //             </>
    //           ))
    //         : null}
    //       {allCourses ? (
    //         <div>CAN DISCOVER COURSES NOW!</div>
    //       ) : (
    //         <div>DISCOVER COURSES IS LOADING...</div>
    //       )}
    //       {allCourses ? console.log('ALL COURSES ARRAY IS', allCourses) : null}
    //       {/* {allCourses
    //         ? allCourses.map((course, index) => {
    //             if (enrolled_courses_id_map[course._id]) {
    //             } else {
    //               return (
    //                 <EnrolledCourseCard
    //                   courseName={course.courseName}
    //                   // PercentageStatus={percentStatusArray[index]}
    //                   courseId={course._id}
    //                 />
    //               );
    //             }
    //           })
    //         : null} */}
    //       {allCourses && enrolled_courses_id_map ? (
    //         allCourses.map((course) => {
    //           if (enrolled_courses_id_map[course._id]) {
    //             return <div>ALREADY ENROLLED!</div>;
    //           } else {
    //             return <div>{course.courseName}</div>;
    //           }
    //         })
    //       ) : (
    //         <div>DISCOVERING COURSES FOR YOU...</div>
    //       )}
    //       {/* <h1>ALL COURSES</h1> */}
    //     </PageContainer>
    //   </>
    // );
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
)(TeacherDashboardAssignPage);
