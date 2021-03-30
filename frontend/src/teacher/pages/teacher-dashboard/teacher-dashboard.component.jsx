//libraries used
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//redux used
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';

//components used
import Profile from '../Profile-page/profile-page.component';
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component';

// import StudentDashboardOverviewPage from '../student-dashboard-overview-page/student-dashboard-overview.component';
import TeacherDashboardOverviewPage from '../teacher-dashboard-overview-page/teacher-dashboard-overview-page.component';
import TeacherEnrolledStudents from '../teacher-enrolled-students/teacher-enrolled-students-component';
import TeacherApproval from '../teacher-approval/teacher-approval.page';
import TeacherDashboardAssignPage from '../assign-courses/assign-courses';
import TeacherTestCheck from '../teacher-testCheck/teacher-test-check.page';
import EvaluateTestPageContainer from '../evaluate-test-page/evaluate-test.container';
import TeacherDashboardFeesPage from '../course-fees/course-fees-page';

//styles used
import { Container, PageWrapper } from './teacher-dashboard.styles';

class teacherDashboard extends React.Component {
  componentDidMount() {
    const { fetchUserCafeStart } = this.props;
    fetchUserCafeStart();
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <Container>
          <TeacherDashboardNavbar />
          <TeacherDashboardSidenav />
          <PageWrapper>
            <Route
              exact
              path={`${match.path}`}
              component={TeacherDashboardOverviewPage}
            />
            <Route exact path={`${match.path}/profile`} component={Profile} />
            <Route
              exact
              path={`${match.path}/enrolled`}
              component={TeacherEnrolledStudents}
            />
            <Route
              exact
              path={`${match.path}/approve`}
              component={TeacherApproval}
            />
            <Route
              exact
              path={`${match.path}/testcheck`}
              component={TeacherTestCheck}
            />
            <Route
              exact
              path={`${match.path}/evaluate`}
              component={EvaluateTestPageContainer}
            />
            <Route
              exact
              path={`${match.path}/assign`}
              component={TeacherDashboardAssignPage}
            />
            <Route
              exact
              path={`${match.path}/studentfees`}
              component={TeacherDashboardFeesPage}
            />
            {/* <Route
              exact
              path={`${match.path}/password`}
              component={ChangePassword}
            /> */}
          </PageWrapper>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserCafeStart: () => dispatch(fetchUserCafeStart()),
});

export default connect(null, mapDispatchToProps)(teacherDashboard);
