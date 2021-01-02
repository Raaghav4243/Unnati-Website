import { createSelector } from 'reselect';

const selectCourseTopicsAndCompletionDetails = (state) =>
  state.courseTopicsAndCompletionDetails;

export const selectCourseTopics = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (courseTopicsAndCompletionDetails) => courseTopicsAndCompletionDetails.topics
);
