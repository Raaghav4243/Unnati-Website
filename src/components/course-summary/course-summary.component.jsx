import React from 'react';

import { CourseSummaryContainer } from './course-summary.styles';

const CourseSummary = (props) => {
  const { summary } = props;
  return <CourseSummaryContainer>{summary}</CourseSummaryContainer>;
};

export default CourseSummary;
