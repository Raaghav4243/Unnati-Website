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
  CoursesContainerTitle,
  CourseInfoWrapper,
} from './CourseElements';

import CourseCard from './CourseCard';

const Courses = () => {
  return (
    <CoursesContainer id='courses'>
      <CoursesContainerTitle>COURSES OFFERED</CoursesContainerTitle>
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

export default Courses;
