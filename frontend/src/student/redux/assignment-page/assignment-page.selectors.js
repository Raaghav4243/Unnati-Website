import { createSelector } from 'reselect';

const selectAssignmentDetails = (state) => state.assignment;

export const selectIsAssignmentFetching = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.isFetching
);

export const selectIsAssignmentSubmitting = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.isAssignmentSubmitting
);

export const selectAssignmentMessageFromBackend = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.messageFromBackend
);

export const selectAssignmentId = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.assignmentId
);
export const selectAssignmentName = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.assignmentName
);
export const selectAssignmentDuration = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.duration
);
export const selectAssignmentMaxMarksPossible = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.maxMarksPossible
);
export const selectAssignmentMaxMarksScored = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.maxMarksScored
);

export const selectAssignmentQuestions = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.questions
);

export const selectAssignmentAttemptsLeft = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.attemptsLeft
);

export const selectAssignmentSubmittedConfirmationMessage = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.submitConformation
);

export const selectHasAssignmentSubmissionFailed = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.submissionFailed
);

export const selectAssignmentReducerError = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.errorMessage
);
