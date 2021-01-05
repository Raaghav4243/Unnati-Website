//libraries used
import React from 'react';

//redux used

//components used

//styles used
import {
  CourseMediaContainer,
  CourseMediaWrapper,
  CourseImage,
} from './course-media.styles';

const CourseMedia = (props) => {
  const { src, alt } = props;
  return (
    <CourseMediaContainer>
      <CourseMediaWrapper>
        <CourseImage src={src} alt={alt} />
      </CourseMediaWrapper>
    </CourseMediaContainer>
  );
};

export default CourseMedia;
