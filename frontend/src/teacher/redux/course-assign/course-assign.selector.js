import { createSelector } from "reselect"

const selectCourseUpdates = (state) => state.assignCourses

export const selectCourseUpdateConfirmation = createSelector(
    [selectCourseUpdates],
    (update) => update.updateConfirmation
)