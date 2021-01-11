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
  // selectUserCafeDetails,
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
import StudentEnrolledCoursesContainer from '../../components/enrolled-courses/enrolled-courses.container';
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
      console.log('ALL COURSES ID MAP IS', all_courses_id_map);
      fetchAllCoursesStart();
    }
    fetchEnrolledCoursesStart(userId);
    fetchUserCafeStart();
  }
  render() {
    const { allCourses } = this.props;
    console.log('ALL COURSES ARRAY', allCourses);
    return (
      <>
        <PageContainer>
          <CafeDetailsParentWrapper>
            <StudentCafeDetails />
          </CafeDetailsParentWrapper>
          <EnrolledCoursesParentWrapper>
            <StudentEnrolledCoursesContainer />
          </EnrolledCoursesParentWrapper>
          <DiscoverCourseParentWrapper>
            <StudentDiscoverCourses />
          </DiscoverCourseParentWrapper>
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userId: selectCurrentUserId,
  // userCafe: selectUserCafeDetails,
  allCourses: selectAllCourses,
  all_courses_id_map: selectAllCoursesIdMap,
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
