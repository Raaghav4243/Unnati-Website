import { createSelector } from 'reselect';

const selectAssignmentDetails = (state) => state.assignment;

export const selectAssignmentQuestions = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.questions
);

export const selectAssignmentMessage = createSelector(
  [selectAssignmentDetails],
  (assignmentDetails) => assignmentDetails.message
);
