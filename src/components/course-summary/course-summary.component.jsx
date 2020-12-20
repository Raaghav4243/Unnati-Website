import React from 'react';

import {
  CourseSummaryContainer,
  CourseSummaryDetails,
  CourseSummaryTitle,
} from './course-summary.styles';

const CourseSummary = (props) => {
  const { summary } = props;
  return (
    <CourseSummaryContainer>
      <CourseSummaryTitle>Course Summary</CourseSummaryTitle>
      <CourseSummaryDetails>{summary}</CourseSummaryDetails>
    </CourseSummaryContainer>
  );
};

export default CourseSummary;
