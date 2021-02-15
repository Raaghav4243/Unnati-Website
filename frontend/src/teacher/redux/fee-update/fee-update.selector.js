import { createSelector } from "reselect"

const selectFeeUpdate = (state) => state.feeUpdate

export const selectFeeUpdateConfirmation = createSelector(
    [selectFeeUpdate],
    (fee) => fee.updateConfirmation
)