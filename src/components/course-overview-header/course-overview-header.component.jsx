import React from 'react';

import {
  CourseOverviewHeaderContainer,
  CourseNameWrapper,
  CourseFeesWrapper,
} from './course-overview-header.styles';

const CourseOverviewHeader = (props) => {
  const { name, fees } = props;
  return (
    <CourseOverviewHeaderContainer>
      <CourseNameWrapper>{name}</CourseNameWrapper>
      <CourseFeesWrapper>${fees}</CourseFeesWrapper>
      {/* <CourseAvailableAtWrapper>
        {availableAt.map((cafe) => (
          <span>cafe</span>
        ))}
      </CourseAvailableAtWrapper> */}
    </CourseOverviewHeaderContainer>
  );
};

export default CourseOverviewHeader;
