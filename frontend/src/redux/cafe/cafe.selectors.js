import { createSelector } from 'reselect';

const selectCafe = (state) => state.cafeDetails;

export const selectUserCafeDetails = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.cafe
);

// export const selectUserTeacherDetails = createSelector(
//   [selectCafe],
//   (cafeDetails) => cafeDetails.teacher
// );

// export const selectUserCafeDetailsLocation = createSelector(
//   [selectUserCafeDetails],
//   (userCafedetails) => userCafedetails.location
// );

// export const selectCafeTeacherDetails = createSelector(
//   [selectCafe],
//   (cafedetails) => cafedetails.teacher
// );

// export const selectAllCourses = createSelector(
//     [selectCourses],
//     (course) => course.allCourses
//   );
