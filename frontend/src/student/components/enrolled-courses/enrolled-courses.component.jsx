import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectPercentStatusForUserEnrolledCourses,
  selectUserEnrolledCourses,
} from '../../redux/student/student.selectors';

import EnrolledCourseCard from './enrolled-course-card.component';

import {
  Container,
  Title,
  EnrolledCourseCardWrapper,
} from './enrolled-courses.styles';

class StudentEnrolledCourses extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('ENROLLED COURSES MOUNTED!');
  }

  render() {
    const { enrolled_courses, percentStatusArray } = this.props;
    console.log('ENROLLED COURSES ARRAY IS', enrolled_courses);
    console.log('PERCENT STATUS ARRAY IS', percentStatusArray);
    return (
      <>
        <Container>
          <Title>Enrolled Courses</Title>
          <EnrolledCourseCardWrapper>
            {enrolled_courses
              ? enrolled_courses.map((course, index) => (
                  <>
                    <EnrolledCourseCard
                      courseName={course.course.courseName}
                      PercentageStatus={Math.round(percentStatusArray[index])}
                      courseId={course.course._id}
                      key={course.course._id}
                    />
                  </>
                ))
              : null}
          </EnrolledCourseCardWrapper>
        </Container>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  enrolled_courses: selectUserEnrolledCourses,
  percentStatusArray: selectPercentStatusForUserEnrolledCourses,
});

export default connect(mapStateToProps)(StudentEnrolledCourses);
