import React from 'react';
import CafeOverview from '../../components/CafeDetails/CafeDetails';
import ClassOverview from '../../components/CafeDetails/classmate';
import Card from '../../components/EnrolledCourses/EnrolledCourses';
import DiscoverCard from '../../components/DiscoverCourses/DiscoverCourses';
import {
  HorizontalFlexBox,
  VerticleFlexBox,
  CafeDetail,
  CafeDetail1,
  CafeDetail2,
  VerticleFlexBox2,
  EnrolledCoursesWrapper,
} from './student.styles';

//libraries used
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux used
import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';
import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';
import { setCurrentCourse } from '../../redux/student/student.actions';

import {
  selectAllCourses,
  selectAllCoursesIdMap,
} from '../../redux/allCourses/all-courses.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import {
  selectUserCafeDetails,
  selectUserCafeNumberOfClassmates,
} from '../../redux/cafe/cafe.selectors';
import { CafeDetails } from '../../components/CafeDetails/Cafe.Details.Styles';
import SideNav from '../../components/SideNav/SideNav';
import {
  selectCurrentCourseId,
  selectUserEnrolledCourses,
} from '../../redux/student/student.selectors';
//components used

//styles used

class StudentDashboard extends React.Component {
  componentDidMount() {
    const {
      userId,
      fetchAllCoursesStart,
      fetchUserCafeStart,
      fetchEnrolledCoursesStart,
    } = this.props;
    // console.log('Component Mounted');
    fetchEnrolledCoursesStart(userId);
    fetchUserCafeStart();
    // fetchAllCoursesStart();
  }

  render() {
    const {
      userId,
      userCafe,
      enrolled_courses,
      no_of_classmates,
      setCurrentCourse,
    } = this.props;
    // console.log(allCourses);
    // console.log(userCafe);
    return (
      <>
        <HorizontalFlexBox>
          {/* {enrolled_courses ? (
            <div>ENROLLED COURSES RECEIVED</div>
          ) : (
            <div>Loading Enrolled Courses...</div>
          )} */}
          <VerticleFlexBox>
            {userCafe ? (
              <>
                <CafeDetail>Cafe Details</CafeDetail>

                <CafeOverview
                  cafe_name='hi'
                  cafe_address={userCafe.location}
                  faculty_incharge='hi'
                />
              </>
            ) : (
              <div>Loading cafe_details</div>
            )}
          </VerticleFlexBox>
          <VerticleFlexBox>
            <CafeDetail1>You Have</CafeDetail1>
            <ClassOverview student_number={no_of_classmates} />
          </VerticleFlexBox>
        </HorizontalFlexBox>
        <VerticleFlexBox2>
          <CafeDetail2>Enrolled Course</CafeDetail2>
          <EnrolledCoursesWrapper>
            {console.log('ENROLLED COURSES ARE ', enrolled_courses)}
            {enrolled_courses ? (
              enrolled_courses.map((courseObj, index) => (
                <Card
                  course_name={courseObj.course.courseName}
                  course_id={courseObj.course._id}
                  key={courseObj.course._id}
                />
                // <>
                //   <div
                //     onClick={() => {
                //       setCurrentCourse(courseObj.course._id);
                //       console.log('COURSE CLICKED');
                //     }}
                //   >
                //     COURSE NAME is {courseObj.course.courseName}
                //   </div>
                // </>
              ))
            ) : (
              <h2>Loading...</h2>
            )}
          </EnrolledCoursesWrapper>
        </VerticleFlexBox2>
        <VerticleFlexBox2>
          <CafeDetail2>Discover More Courses</CafeDetail2>
          <EnrolledCoursesWrapper>
            {/* {allCourses ? (
              allCourses.map((course) => (
                <DiscoverCard
                  course_name={course.subjectName}
                  key={course._id}
                />
              ))
            ) : (
              <h2>Loading...</h2>
            )} */}
          </EnrolledCoursesWrapper>
        </VerticleFlexBox2>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  // allCourses: selectAllCourses,
  userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
  enrolled_courses: selectUserEnrolledCourses,
  all_courses_id_map: selectAllCoursesIdMap,
  no_of_classmates: selectUserCafeNumberOfClassmates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEnrolledCoursesStart: (user_id) =>
    dispatch(fetchEnrolledCoursesStart(user_id)),
  // fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
  // fetchUserCafeStartAsync: () => dispatch(fetchUserCafeStartAsync()),
  setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),

  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
