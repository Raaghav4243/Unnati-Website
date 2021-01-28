import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux
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
    const { fetchUserCafeStart, fetchEnrolledCoursesStart } = this.props;
    fetchEnrolledCoursesStart();
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

const mapDispatchToProps = (dispatch) => ({
  fetchEnrolledCoursesStart: () => dispatch(fetchEnrolledCoursesStart()),
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
});

export default connect(null, mapDispatchToProps)(StudentDashboardOverviewPage);
