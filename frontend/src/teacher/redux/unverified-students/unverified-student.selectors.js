import { createSelector } from "reselect"

const selectUnVerifiedStudentDetails = (state) => state.unverifiedStudent

export const selectUnVerifiedStudents = createSelector(
    [selectUnVerifiedStudentDetails],
    (unverifiedStudentDetails) => unverifiedStudentDetails.unverifiedStudents
);




