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
import { Container, PageWrapper } from './student-dashboard.styles';

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
  // selectUserCafeDetails,
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
import FeesPage from '../fees-page/fees-page.component';
import StudentDashboardSidenav from '../../components/student-dashboard-sidenav/student-dashboard-sidenav.component';
import StudentDashboardNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';
import StudentDashboardOverviewPage from '../student-dashboard-overview-page/student-dashboard-overview.component';
import CourseOverview from '../course-overview/course-overview.component';
import ChangePassword from '../change-password/change-password.component';

//components used

//styles used

class studentDashboard extends React.Component {
  componentDidMount() {}

  render() {
    const { match } = this.props;

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
            <Route
              exact
              path={`${match.path}/password`}
              component={ChangePassword}
            />

            {/* <Route
              exact
              path={`${match.path}/discover`}
              component={CourseOverview}
            /> */}
          </PageWrapper>
        </Container>
      </>
    );
  }
}
export default studentDashboard;
