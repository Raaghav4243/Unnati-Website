import { createSelector } from "reselect"

const selectUnVerifiedStudentDetails = (state) => state.unverifiedStudent

export const selectUnVerifiedStudents = createSelector(
    [selectUnVerifiedStudentDetails],
    (unverifiedStudentDetails) => unverifiedStudentDetails.unverifiedStudents
);

export const selectApproveConfirmation = createSelector(
    [selectUnVerifiedStudentDetails],
    (message) => message.approveConfirmation
)

export const selectUnVerifiedStudentsIsFetching = createSelector(
    [selectUnVerifiedStudentDetails],
    isFetching => isFetching.isFetching
)




