import { createSelector } from "reselect"

const selectVerifiedStudentDetails = (state) => state.verifiedStudent

export const selectVerifiedStudents = createSelector(
    [selectVerifiedStudentDetails],
    (verifiedStudentDetails) => verifiedStudentDetails.verifiedStudents
);

export const selectVerifiedStudentsIsFetching = createSelector(
    [selectVerifiedStudentDetails],
    (isFetching) => isFetching.isFetching
)



