import { createSelector } from "reselect"

const selectFeeDetails = (state) => state.feeDetails

export const selectUserFeeDetails = createSelector(
    [selectFeeDetails],
    (fee) => {
        console.log(fee)
        return fee
    }
)