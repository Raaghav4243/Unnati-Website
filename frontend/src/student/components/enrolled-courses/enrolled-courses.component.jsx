import React from 'react';

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

  render() {
    return (
      <>
        <Container>
          <Title>Enrolled Courses</Title>
          <EnrolledCourseCardWrapper>
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
            <EnrolledCourseCard
              courseName={'Microsoft EXCEL'}
              PercentageStatus={33.33}
              courseId={'hkjhfh'}
            />
          </EnrolledCourseCardWrapper>
        </Container>
      </>
    );
  }
}

export default StudentEnrolledCourses;
