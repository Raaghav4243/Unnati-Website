import React from 'react';
import { connect } from 'react-redux';

//redux
// import { fetchEnrolledCoursesStart } from '../../redux/student/student.actions';

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import TestContainer from './test.container';

// import StudentEnrolledCoursesContainer from '../../components/enrolled-courses/enrolled-courses.container';
// import StudentDiscoverCourses from '../../components/discover-courses/discover-courses.component';

import // PageContainer,
// CafeDetailsParentWrapper,
// EnrolledCoursesParentWrapper,
// DiscoverCourseParentWrapper,
'./test-page.styles';
import { fetchTestStart } from '../../redux/testpage/testpage.actions';

class TestPage extends React.Component {
  componentDidMount() {
    const { fetchTestStart } = this.props;
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
        <TestContainer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTestStart: () => dispatch(fetchTestStart()),
});

export default connect(null, mapDispatchToProps)(TestPage);
