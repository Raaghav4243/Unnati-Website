import { createSelector } from "reselect"

const selectTest = (state) => state.evaluateTests

export const selectTestDetails = createSelector(
    [selectTest],
    (test) => test.testResponse
)