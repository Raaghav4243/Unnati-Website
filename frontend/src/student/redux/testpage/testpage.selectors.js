import { createSelector } from 'reselect';

const selectTestDetails = (state) => state.test;

export const selectIsTestFetching = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.isFetching
);

export const selectIsTestSubmitting = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.isTestSubmitting
);

export const selectTestMessageFromBackend = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.messageFromBackend
);

export const selectTestId = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.testId
);

export const selectTestName = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.testName
);

export const selectTestDuration = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.duration
);

export const selectTestMarksScored = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.marksScored
);

export const selectTestMaxMarksPossible = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.maxMarksPossible
);

export const selectTestQuestions = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.questions
);

export const selectTestSubmittedConfirmationMessage = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.submitConformation
);

export const selectHasTestSubmissionFailed = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.submissionFailed
);

export const selectTestReducerError = createSelector(
  [selectTestDetails],
  (testDetails) => testDetails.errorMessage
);
