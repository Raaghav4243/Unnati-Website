import { createSelector } from 'reselect';

const selectFeeDetails = (state) => state.feeDetails;

export const selectUserFeeDetails = createSelector(
  [selectFeeDetails],
  (fee) => {
    // console.log(fee);
    return fee;
  }
);

export const selectUserFeeReciepts = createSelector(
  [selectUserFeeDetails],
  (reciepts) => {
    return reciepts.receipts;
  }
);

export const selectIsUserFeeDetailsFetching = createSelector(
  [selectUserFeeDetails],
  (details) => {
    return details.isFetching;
  }
);

// export const selectUserFeeAmount = createSelector(
//     // [selectUserFeeReciepts],
//     // (amount) => {
//     //     amount.map((amount => {
//     //         return amount.remarks
//     //     }))
//     // }
// )
