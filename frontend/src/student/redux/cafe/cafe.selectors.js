import { createSelector } from 'reselect';

const selectCafe = (state) => state.cafeDetails;

export const selectUserCafeId = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.cafeId
);

export const selectUserCafeAddress = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.cafeAddress
);

export const selectUserCafeLocation = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.cafeLocation
);

export const selectUserCafeName = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.cafeName
);

export const selectUserCafeTeacherInChargeName = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.teacherInChargeName
);

export const selectUserCafeTeacherInChargeId = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.teacherInChargeId
);

export const selectUserCafeNumberOfClassmates = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.number_of_classmates
);

export const selectUserCafeError = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.errorMessage
);
