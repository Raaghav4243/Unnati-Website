import { VerifiedStudentsType } from "./verified-students.types";

export const fetchVerifiedStudentStart = () => ({
    type: VerifiedStudentsType.FETCH_VERIFIED_STUDENT_START
})

export const fetchVerifiedStudentSuccess = (student) => ({
    type: VerifiedStudentsType.FETCH_VERIFIED_STUDENT_SUCCESS,
    payload: student
})

export const fetchVerifiedStudentFailure = (errorMessage) => ({
    type: VerifiedStudentsType.FETCH_VERIFIED_STUDENT_FAILURE,
    payload: errorMessage
})