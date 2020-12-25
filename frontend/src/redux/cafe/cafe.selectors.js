import { createSelector } from 'reselect';

const selectCafe = (state) => state.cafedetails;

export const selectUserCafeDetails = createSelector(
  [selectCafe],
  (cafedetails) => cafedetails.cafe
);
export const selectCafeTeacherDetails = createSelector(
  [selectCafe],
  (cafedetails) => cafedetails.teacher
);
// export const selectAllCourses = createSelector(
//     [selectCourses],
//     (course) => course.allCourses
//   );
  