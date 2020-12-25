import { createSelector } from 'reselect';

const selectCafe = (state) => state.cafeDetails;

export const selectUserCafeDetails = createSelector(
  [selectCafe],
  (cafedetails) => cafedetails.cafe
);

export const selectUserCafeDetailsLocation = createSelector(
  [selectUserCafeDetails],
  (userCafedetails) => userCafedetails.location
);

// export const selectUserCafeDetailsLocation = createSelector(
//   [selectUserCafeDetails],
//   (userCafedetails) => userCafedetails.location
// );

export const selectCafeTeacherDetails = createSelector(
  [selectCafe],
  (cafedetails) => cafedetails.teacher
);

// export const selectAllCourses = createSelector(
//     [selectCourses],
//     (course) => course.allCourses
//   );
