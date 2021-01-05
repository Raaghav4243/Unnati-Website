import { createSelector } from 'reselect';

const selectCafe = (state) => state.cafeDetails;

export const selectUserCafeDetails = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.userCafeDetails
);

export const selectUserCafeNumberOfClassmates = createSelector(
  [selectCafe],
  (cafeDetails) => cafeDetails.number_of_classmates
);
