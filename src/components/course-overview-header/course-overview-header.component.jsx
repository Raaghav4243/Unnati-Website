import React from 'react';

import {
  CourseOverviewHeaderContainer,
  CourseOverviewHeaderWrapper,
  CourseNameWrapper,
  CourseFeesWrapper,
  CourseAvailableAtWrapper,
  AvailableAtTitle,
} from './course-overview-header.styles';

const CourseOverviewHeader = (props) => {
  const { name, fees, availableAt } = props;
  return (
    <CourseOverviewHeaderContainer>
      <CourseOverviewHeaderWrapper>
        <CourseNameWrapper>{name}</CourseNameWrapper>
        <CourseFeesWrapper>${fees}</CourseFeesWrapper>
        <CourseAvailableAtWrapper>
          <AvailableAtTitle>Available at:</AvailableAtTitle>
          <span style={{ color: 'white', fontWeight: '100' }}> | </span>
          {availableAt.map((cafe) => (
            <span key={cafe} style={{ color: 'white', fontWeight: '100' }}>
              {' '}
              {cafe} |
            </span>
          ))}
        </CourseAvailableAtWrapper>
      </CourseOverviewHeaderWrapper>
    </CourseOverviewHeaderContainer>
  );
};

export default CourseOverviewHeader;
