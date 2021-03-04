//libraries used
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//redux used
import { fetchUserCafeStart } from '../../redux/cafe/cafe.actions';

//components used
import Profile from '../Profile-page/profile-page.component';
import FeesPage from '../fees-page/fees-page.component';
import StudentDashboardSidenav from '../../components/student-dashboard-sidenav/student-dashboard-sidenav.component';
import StudentDashboardNavbar from '../../components/student-dashboard-navbar/student-dashboard-navbar.component';
import StudentDashboardOverviewPage from '../student-dashboard-overview-page/student-dashboard-overview.component';

//styles used
import { Container, PageWrapper } from './student-dashboard.styles';

class studentDashboard extends React.Component {
  componentDidMount() {
    const { fetchUserCafeStart } = this.props;
    fetchUserCafeStart();
  }

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

export default connect(null, mapDispatchToProps)(studentDashboard);
