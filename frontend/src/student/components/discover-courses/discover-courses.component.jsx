import React from 'react';

import DiscoverCourseCard from './discover-courses-card.component';

import {
  Container,
  Title,
  DiscoverCoursesCardWrapper,
} from './discover-courses.styles';

class StudentDiscoverCourses extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Container>
          <Title>Discover More Courses</Title>
          <DiscoverCoursesCardWrapper>
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
            <DiscoverCourseCard courseName={'Microsoft Powerpoint'} />
          </DiscoverCoursesCardWrapper>
        </Container>
      </>
    );
  }
}

export default StudentDiscoverCourses;
