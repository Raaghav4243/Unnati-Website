import {UnVerifiedStudentsType } from "./unverified-students.types";

export const fetchUnVerifiedStudentStart = () => {
    return {
      type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START,
    };
  };
  

export const fetchUnVerifiedStudentSuccess = (student) =>{
    return {
      type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_SUCCESS,
      payload: student,
    };
  };
  

export const fetchUnVerifiedStudentFailure = (errorMessage) =>{
    return {
      type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_FAILURE,
      payload: errorMessage,
    };
  };