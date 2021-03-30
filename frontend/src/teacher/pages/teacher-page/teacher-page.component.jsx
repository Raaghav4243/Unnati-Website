import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import GoToDashboardButton from '../../../student/components/go-to-dashboard-button-link/go-to-dashboard-button-link.component';
// import studentCourseTopicPage from '../student-course-topic-page/student-course-topic-page';
// import studentDashboard from '../student-dashboard/student-dashboard.component';
import teacherDashboard from '../teacher-dashboard/teacher-dashboard.component';
// import CourseOverview from '../../../student/course-overview/course-overview.component';
import CourseOverview from '../../../student/pages/course-overview/course-overview.component';

import { Container, Prompt } from './teacher-page.styles';

class TeacherPage extends React.Component {


  render() {
    const { match, location } = this.props;
    return (
      <>
        <Route path={`${match.path}/dashboard`} component={teacherDashboard} />

        <Route
          path={`${match.path}/discover`}
          exact
          render={() => <CourseOverview forUser />}
          // component={CourseOverview}
        />
        {
          // debugged testcase : incase user manually goes to /student
        }
        {location.pathname === '/teacher' ||
        location.pathname === '/teacher/' ? (
          <Container>
            <Prompt>There is nothing to see here! Instead...</Prompt>
            <GoToDashboardButton />
          </Container>
        ) : null}
      </>
    );
  }
}

export default withRouter(TeacherPage);
