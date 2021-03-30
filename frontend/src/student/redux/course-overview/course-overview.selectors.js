import { createSelector } from 'reselect';

const selectCourseOverview = (state) => state.courseOverview;

export const selectCurrentCourseOverviewId = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.courseId
);

export const selectCurrentCourseOverviewName = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.courseName
);

export const selectCurrentCourseOverviewSummary = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.courseSummary
);

export const selectCurrentCourseOverviewPrice = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.coursePrice
);

export const selectCurrentCourseOverviewAvailableAt = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.courseAvailableAt
);

export const selectCurrentCourseOverviewError = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.errorMessage
);

export const selectCurrentCourseOverviewIsFetching = createSelector(
  [selectCourseOverview],
  (courseOverview) => courseOverview.isFetching
);

// export const selectAssignmentMessage = createSelector(
//   [selectAssignmentDetails],
//   (assignmentDetails) => assignmentDetails.message
// );

// export const selectAssignmentId = createSelector(
//   [selectAssignmentDetails],
//   (assignmentDetails) => assignmentDetails.assignmentId
// );
