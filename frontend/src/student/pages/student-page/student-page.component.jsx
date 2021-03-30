import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import GoToDashboardButton from '../../components/go-to-dashboard-button-link/go-to-dashboard-button-link.component';
import studentCourseTopicPage from '../student-course-topic-page/student-course-topic-page';
import studentDashboard from '../student-dashboard/student-dashboard.component';
import CourseOverview from '../course-overview/course-overview.component';

import { Container, Prompt } from './student-page.styles';

class StudentPage extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { match, location } = this.props;
    return (
      <>
        <Route path={`${match.path}/dashboard`} component={studentDashboard} />
        <Route
          path={`${match.path}/course`}
          component={studentCourseTopicPage}
        />
        <Route
          path={`${match.path}/discover`}
          exact
          render={() => <CourseOverview forUser />}
          // component={CourseOverview}
        />
        {
          // debugged testcase : incase user manually goes to /student
        }
        {location.pathname === '/student' ||
        location.pathname === '/student/' ? (
          <Container>
            <Prompt>There is nothing to see here! Instead...</Prompt>
            <GoToDashboardButton />
          </Container>
        ) : null}
      </>
    );
  }
}

export default withRouter(StudentPage);
