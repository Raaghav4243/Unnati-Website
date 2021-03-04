import { createSelector } from 'reselect';

const selectFeeAmount = (state) => state.feeAmount;

// export const selectCurrentUserFees = createSelector(
//   [selectFeeAmount],
//   (fee) => {
//     console.log('fee object is ', fee);
//     return fee;
//   }
// );

export const selectUserPaidFees = createSelector([selectFeeAmount], (paid) => {
  console.log('paid amount is ', paid.paidAmount);
  return paid.paidAmount;
});

export const selectUserDueFees = createSelector(
  [selectFeeAmount],
  (due) => due.dueAmount
);

export const selectIsUserFeeAmountFetching = createSelector(
  [selectFeeAmount],
  (amount) => amount.isFetching
);
