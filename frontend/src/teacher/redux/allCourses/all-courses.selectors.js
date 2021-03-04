import { createSelector } from 'reselect';

const selectCourses = (state) => state.allCourses;

export const selectAllCourses = createSelector(
  [selectCourses],
  (course) => course.allCourses
);

export const selectAllCoursesIdMap = createSelector(
  [selectCourses],
  (course) => course.allCoursesIdMap
);

export const selectIsAllCoursesFetching = createSelector(
  [selectCourses],
  (course) => course.isFetching
);

