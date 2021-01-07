import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux
import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
import {
  selectAllCourses,
  selectAllCoursesIdMap,
} from '../../redux/allCourses/all-courses.selectors';
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
import {
  selectUserCafeDetails,
  selectUserCafeNumberOfClassmates,
} from '../../redux/cafe/cafe.selectors';
import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';
import {
  selectPercentStatusForUserEnrolledCourses,
  selectUserEnrolledCourses,
  selectUserEnrolledCoursesIdMap,
} from '../../redux/student/student.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import StudentCafeDetails from '../../components/cafe-details/cafe-details.component';

import {
  PageContainer,
  CafeDetailsParentWrapper,
  EnrolledCoursesParentWrapper,
  DiscoverCourseParentWrapper,
} from './student-dashboard-overview.styles';
import StudentEnrolledCourses from '../../components/enrolled-courses/enrolled-courses.component';
import StudentDiscoverCourses from '../../components/discover-courses/discover-courses.component';

class StudentDashboardOverviewPage extends React.Component {
  componentDidMount() {
    const {
      userId,
      fetchUserCafeStart,
      fetchEnrolledCoursesStart,
      all_courses_id_map,
      fetchAllCoursesStart,
    } = this.props;
    // if(allCourses is null), then fetchAllCoursesStart() as well.
    if (all_courses_id_map) {
    } else {
      fetchAllCoursesStart();
    }
    fetchEnrolledCoursesStart(userId);
    fetchUserCafeStart();
  }
  render() {
    const {
      enrolled_courses,
      userCafe,
      allCourses,
      enrolled_courses_id_map,
      percentStatusArray,
    } = this.props;
    console.log('ENROLLED COURSES ARRAY ', enrolled_courses);
    return (
      <>
        <PageContainer>
          <CafeDetailsParentWrapper>
            <StudentCafeDetails />
          </CafeDetailsParentWrapper>
          <EnrolledCoursesParentWrapper>
            <StudentEnrolledCourses />
          </EnrolledCoursesParentWrapper>
          <DiscoverCourseParentWrapper>
            <StudentDiscoverCourses />
          </DiscoverCourseParentWrapper>
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
  userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  enrolled_courses: selectUserEnrolledCourses,
  enrolled_courses_id_map: selectUserEnrolledCoursesIdMap,
  allCourses: selectAllCourses,
  all_courses_id_map: selectAllCoursesIdMap,
  no_of_classmates: selectUserCafeNumberOfClassmates,
  percentStatusArray: selectPercentStatusForUserEnrolledCourses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEnrolledCoursesStart: (user_id) =>
    dispatch(fetchEnrolledCoursesStart(user_id)),
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDashboardOverviewPage);
