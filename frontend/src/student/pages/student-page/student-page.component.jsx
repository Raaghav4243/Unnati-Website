import React from 'react';
import { Route } from 'react-router-dom';
import studentCourseTopicPage from '../student-course-topic-page/student-course-topic-page';
import StudentDashboard from '../student-dashboard/StudentDashboard';

class StudentPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}`} component={StudentDashboard} />
        <Route
          path={`${match.path}/course`}
          component={studentCourseTopicPage}
        />
      </>
    );
  }
}

export default StudentPage;
