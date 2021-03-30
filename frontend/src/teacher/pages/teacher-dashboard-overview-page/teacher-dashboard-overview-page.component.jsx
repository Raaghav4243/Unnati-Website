import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//redu

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';

import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component';
import DiscoverCourseCard from '../../components/discover-course/discover-courses-card.component';

import {
  PageContainer,
  CafeDetailsParentWrapper,
  DiscoverCourseParentWrapper,
  TextTitle,
  Container,
  DiscoverCoursesCardWrapper,
} from './teacher-dashboard-overview-page.styles';
// import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
// import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';
import { selectAllCourses } from '../../../student/redux/allCourses/all-courses.selectors';
import { fetchAllCoursesStart } from '../../../student/redux/allCourses/all-courses.actions';
class TeacherDashboardOverviewPage extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userId: null,
  //     cafeId: null,
  //     courseId: null,
  //     courseName: null,
  //   };
  // }
  // componentDidMount() {
  //   const { fetchUserCafeStart, fetchAllCoursesStart } = this.props;
  //   fetchUserCafeStart();
  //   fetchAllCoursesStart();
  // }
  render() {
    const { allCourses } = this.props;
    return (
      <>
        <PageContainer>
          {/* <PageWrapper> */}
          <CafeDetailsParentWrapper>
            <TeacherCafeDetails />
          </CafeDetailsParentWrapper>
          {/* <DiscoverCourseParentWrapper>
            <TeacherDiscoverCourses />
          </DiscoverCourseParentWrapper> */}
          <TextTitle>Courses Available</TextTitle>
          <DiscoverCourseParentWrapper>
            <Container>
              <DiscoverCoursesCardWrapper>
                {allCourses
                  ? allCourses.map((course) => {
                      return course.courseName ? (
                        <DiscoverCourseCard
                          courseId={course._id}
                          courseName={course.courseName}
                        />
                      ) : null;
                    })
                  : null}
              </DiscoverCoursesCardWrapper>
            </Container>
          </DiscoverCourseParentWrapper>
          {/* </PageWrapper> */}
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //userId: selectCurrentUserId,
  // userCafe: selectUserCafeDetails,
  allCourses: selectAllCourses,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
  fetchAllCoursesStart: () => dispatch(fetchAllCoursesStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherDashboardOverviewPage);
