import React from 'react';
import {
  CourseCardOne,
  CourseCardTwo,
  CourseCardThree,
  CourseCardFour,
  CourseCardFive,
  CourseCardSix,
} from './data';

import {
  CoursesContainer,
  CourseTitleContainer,
  CourseTitle,
  // CoursesContainerTitle,
  CourseInfoWrapper,
} from './homepage-our-courses.styles';

import CourseCard from './homepage-our-courses-card.component';

const OurCoursesSection = () => {
  return (
    <CoursesContainer id='courses'>
      {/* <CoursesContainerTitle>COURSES OFFERED</CoursesContainerTitle> */}
      <CourseTitleContainer>
        <CourseTitle>COURSES OFFERED</CourseTitle>
      </CourseTitleContainer>

      <CourseInfoWrapper>
        <CourseCard {...CourseCardOne} />
        <CourseCard {...CourseCardTwo} />
        <CourseCard {...CourseCardThree} />
        <CourseCard {...CourseCardFour} />
        <CourseCard {...CourseCardFive} />
        <CourseCard {...CourseCardSix} />
      </CourseInfoWrapper>
    </CoursesContainer>
  );
};

export default OurCoursesSection;
