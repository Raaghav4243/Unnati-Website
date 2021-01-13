import { createSelector } from "reselect"

const selectTest = (state) => state.evaluateTests

export const selectTestDetails = createSelector(
    [selectTest],
    (test) => test.testResponse
)

export const selectTestCourseId = createSelector(
    [selectTest],
    (test) => test.courseId
)