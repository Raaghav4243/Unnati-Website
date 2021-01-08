//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

// import GoogleDocsViewer from 'react-google-docs-viewer';
// import CafeOverview from '../../components/CafeDetails/CafeDetails';
// import ClassOverview from '../../components/CafeDetails/classmate';
// import Card from '../../components/EnrolledCourses/EnrolledCourses';
// import DiscoverCard from '../../components/DiscoverCourses/DiscoverCourses';
import {
  // HorizontalFlexBox,
  // VerticleFlexBox,
  // CafeDetail,
  // CafeDetail1,
  // CafeDetail2,
  // VerticleFlexBox2,
  // EnrolledCoursesWrapper,
  // CoverContainer,
  Container,
  PageWrapper,
} from './student-dashboard.styles';

//redux used
// import { fetchAllCoursesStart } from '../../redux/allCourses/all-courses.actions';
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
import { CafeDetails } from '../../components/recycle-bin/CafeDetails/Cafe.Details.Styles';
import SideNav from '../../components/SideNav/SideNav';
import {
  selectCurrentCourseId,
  selectUserEnrolledCourses,
} from '../../redux/student/student.selectors';
import ProfileSideNav from '../../components/SideNav/SideNav';
import Profile from '../Profile-page/profile-page.component';
import FeesPage from '../FeesPage/App';
import StudentDashboardSidenav from '../../components/student-dashboard-sidenav/student-dashboard-sidenav.component';
import StudentDashboardNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';
import StudentDashboardOverviewPage from '../student-dashboard-overview-page/student-dashboard-overview.component';

//components used

//styles used

class studentDashboard extends React.Component {
  componentDidMount() {
    // const {
    //   userId,
    //   fetchAllCoursesStart,
    //   fetchUserCafeStart,
    //   fetchEnrolledCoursesStart,
    // } = this.props;
    // // console.log('Component Mounted');
    // // fetchEnrolledCoursesStart(userId);
    // // fetchUserCafeStart();
    // // fetchAllCoursesStart();
  }

  render() {
    const {
      userId,
      userCafe,
      enrolled_courses,
      no_of_classmates,
      setCurrentCourse,
      match,
      history,
    } = this.props;

    return (
      <>
        <Container>
          <StudentDashboardNavbar />
          <StudentDashboardSidenav />
          <PageWrapper>
            <Route
              exact
              path={`${match.path}`}
              component={StudentDashboardOverviewPage}
            />
            <Route exact path={`${match.path}/fees`} component={FeesPage} />
            <Route exact path={`${match.path}/profile`} component={Profile} />
          </PageWrapper>
        </Container>
      </>
    );

    {
      /* <Dummy1 />
        <Dummy2 />

        <Container>
          <iframe
            src='https://drive.google.com/file/d/1jsCYgITKSpwmjV_X7EzdBDDxh_gj7OpS/preview'
            width='640'
            height='480'
            frameborder='0'
            scrolling='no'
            seamless=''
          ></iframe>

          <CoverContainer></CoverContainer>
        </Container> */
    }

    // console.log(allCourses);
    // console.log(userCafe);
    // return (
    //   <>
    //     <HorizontalFlexBox>
    //       {/* {enrolled_courses ? (
    //         <div>ENROLLED COURSES RECEIVED</div>
    //       ) : (
    //         <div>Loading Enrolled Courses...</div>
    //       )} */}
    //       <VerticleFlexBox>
    //         {userCafe ? (
    //           <>
    //             <CafeDetail>Cafe Details</CafeDetail>

    //             <CafeOverview
    //               cafe_name='hi'
    //               cafe_address={userCafe.location}
    //               faculty_incharge='hi'
    //             />
    //           </>
    //         ) : (
    //           <div>Loading cafe_details</div>
    //         )}
    //       </VerticleFlexBox>
    //       <VerticleFlexBox>
    //         <CafeDetail1>You Have</CafeDetail1>
    //         <ClassOverview student_number={no_of_classmates} />
    //       </VerticleFlexBox>
    //     </HorizontalFlexBox>
    //     <VerticleFlexBox2>
    //       <CafeDetail2>Enrolled Course</CafeDetail2>
    //       <EnrolledCoursesWrapper>
    //         {console.log('ENROLLED COURSES ARE ', enrolled_courses)}
    //         {enrolled_courses ? (
    //           enrolled_courses.map((courseObj, index) => (
    //             <Card
    //               course_name={courseObj.course.courseName}
    //               course_id={courseObj.course._id}
    //               key={courseObj.course._id}
    //             />
    //             // <>
    //             //   <div
    //             //     onClick={() => {
    //             //       setCurrentCourse(courseObj.course._id);
    //             //       console.log('COURSE CLICKED');
    //             //     }}
    //             //   >
    //             //     COURSE NAME is {courseObj.course.courseName}
    //             //   </div>
    //             // </>
    //           ))
    //         ) : (
    //           <h2>Loading...</h2>
    //         )}
    //       </EnrolledCoursesWrapper>
    //     </VerticleFlexBox2>
    //     <VerticleFlexBox2>
    //       <CafeDetail2>Discover More Courses</CafeDetail2>
    //       <EnrolledCoursesWrapper>
    //         {/* {allCourses ? (
    //           allCourses.map((course) => (
    //             <DiscoverCard
    //               course_name={course.subjectName}
    //               key={course._id}
    //             />
    //           ))
    //         ) : (
    //           <h2>Loading...</h2>
    //         )} */}
    //         {}
    //       </EnrolledCoursesWrapper>
    //     </VerticleFlexBox2>
    //   </>
    // );
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
  setCurrentCourse: (course_id) => dispatch(setCurrentCourse(course_id)),
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(studentDashboard);
