import React from 'react';
import { connect } from 'react-redux';

//redux
import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import AssignmentContainer from './assignment.container';

import StudentEnrolledCoursesContainer from '../../components/enrolled-courses/enrolled-courses.container';
import StudentDiscoverCourses from '../../components/discover-courses/discover-courses.component';

import // PageContainer,
// CafeDetailsParentWrapper,
// EnrolledCoursesParentWrapper,
// DiscoverCourseParentWrapper,
'./assignment-page.styles';
import { fetchAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';

class AssignmentPage extends React.Component {
  componentDidMount() {
    const { fetchAssignmentStart } = this.props;
    // fetchAssignmentStart();
  }
  render() {
    // const { allCourses } = this.props;
    // console.log('ALL COURSES ARRAY', allCourses);
    return (
      <>
        {/* <PageContainer>
          <CafeDetailsParentWrapper>
            <StudentCafeDetails />
          </CafeDetailsParentWrapper>
          <EnrolledCoursesParentWrapper>
            <StudentEnrolledCoursesContainer />
          </EnrolledCoursesParentWrapper>
          <DiscoverCourseParentWrapper>
            <StudentDiscoverCourses />
          </DiscoverCourseParentWrapper>
        </PageContainer> */}
        <AssignmentContainer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAssignmentStart: () => dispatch(fetchAssignmentStart()),
});

export default connect(null, mapDispatchToProps)(AssignmentPage);
