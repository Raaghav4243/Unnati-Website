import React from 'react';
import { connect } from 'react-redux';

//redux
import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import StudentCafeDetails from '../../components/cafe-details/cafe-details.component';

import StudentEnrolledCoursesContainer from '../../components/enrolled-courses/enrolled-courses.container';
import StudentDiscoverCourses from '../../components/discover-courses/discover-courses.component';

import {
  PageContainer,
  CafeDetailsParentWrapper,
  EnrolledCoursesParentWrapper,
  DiscoverCourseParentWrapper,
} from './student-dashboard-overview.styles';

class StudentDashboardOverviewPage extends React.Component {
  componentDidMount() {
    const { fetchEnrolledCoursesStart } = this.props;
    fetchEnrolledCoursesStart();
  }
  render() {
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
});

export default connect(null, mapDispatchToProps)(StudentDashboardOverviewPage);
