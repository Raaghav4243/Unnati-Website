import { createSelector } from "reselect"

const selectFeeAmount = (state) => state.feeAmount

export const selectCurrentUserFees = createSelector(
    [selectFeeAmount],
    (fee) => {
        //console.log(fee.feeAmount)
        return fee
    }
    
)

 export const selectUserPaidFees = createSelector(
     [selectCurrentUserFees],
    (paid) => paid.paidAmount
 )
 export const selectUserDueFees = createSelector(
    [selectCurrentUserFees],
    (due) => due.dueAmount
 )

