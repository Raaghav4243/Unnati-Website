import { createSelector } from 'reselect';

const selectFeeAmount = (state) => state.feeAmount;

export const selectCurrentUserFees = createSelector(
  [selectFeeAmount],
  (fee) => {
    console.log('fee object is ', fee);
    return fee.feeAmount;
  }
);

export const selectUserPaidFees = createSelector(
  [selectCurrentUserFees],
  (paid) => {
    console.log('paid amount is ', paid.paidAmount);
    return paid.paidAmount;
  }
);

export const selectUserDueFees = createSelector(
  [selectCurrentUserFees],
  (due) => due.dueAmount
);
