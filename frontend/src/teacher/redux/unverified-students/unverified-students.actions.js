import {UnVerifiedStudentsType } from "./unverified-students.types";

export const fetchUnVerifiedStudentStart = () => ({
    type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START
})

export const fetchUnVerifiedStudentSuccess = (student) => ({
    type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_SUCCESS,
    payload: student
})

export const fetchUnVerifiedStudentFailure = (errorMessage) => ({
    type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_FAILURE,
    payload: errorMessage
})