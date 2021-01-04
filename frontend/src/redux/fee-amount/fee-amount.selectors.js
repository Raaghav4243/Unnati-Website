import { createSelector } from "reselect"

const selectFeeAmount = (state) => state.feeAmount

export const selectCurrentUserFees = createSelector(
    [selectFeeAmount],
    (fee) => fee
)

// export const selectUserPaidFees = createSelector(
//     [selectCurrentUserFees],
//     //(fee) => fee.paidAmount
// )

// export const selectUserDueFees = createSelector(
//    [selectCurrentUserFees],
//    //(fee) => fee.dueAmount
// )

