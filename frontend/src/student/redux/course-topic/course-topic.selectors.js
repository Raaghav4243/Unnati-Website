import { createSelector } from 'reselect';

const selectCourseTopicsAndCompletionDetails = (state) =>
  state.courseTopicsAndCompletionDetails;

export const selectCourseTopics = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (courseTopicsAndCompletionDetails) => courseTopicsAndCompletionDetails.topics
);

export const selectIsCourseTopicsFetching = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (courseTopicsAndCompletionDetails) =>
    courseTopicsAndCompletionDetails.isFetching
);

export const selectCompletedCourseTopicsId = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (selectCompletedCourseTopicId) =>
    selectCompletedCourseTopicId.attemptedTopicList
);

export const selectCourseId = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (selectCourseTopicsAndCompletionDetails) =>
    selectCourseTopicsAndCompletionDetails.course_id
);

export const selectCurrentCourseName = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (courseTopicsAndCompletionDetails) =>
    courseTopicsAndCompletionDetails.course_name
);

export const selectViewedLectureSuccessConfirmation = createSelector(
  [selectCourseTopicsAndCompletionDetails],
  (courseTopicsAndCompletionDetails) =>
    courseTopicsAndCompletionDetails.viewedLectureForFirstTimeSuccessConfirmation
);
