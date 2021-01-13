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

// export const selectAssignmentMessage = createSelector(
//   [selectAssignmentDetails],
//   (assignmentDetails) => assignmentDetails.message
// );

// export const selectAssignmentId = createSelector(
//   [selectAssignmentDetails],
//   (assignmentDetails) => assignmentDetails.assignmentId
// );
