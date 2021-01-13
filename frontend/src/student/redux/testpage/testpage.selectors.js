import { createSelector } from 'reselect';

const selectTestDetails = (state) => state.test;

export const selectTestName = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.testName
);

export const selectTestQuestions = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.questions
);

export const selectTestMessage = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.message
);
