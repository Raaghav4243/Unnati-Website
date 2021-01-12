import { VerifiedStudentsType } from "./verified-students.types";

export const fetchVerifiedStudentStart = () => {
  return {
    type: VerifiedStudentsType.FETCH_VERIFIED_STUDENT_START,
  };
};

export const fetchVerifiedStudentSuccess = (student) => {
  return {
    type: VerifiedStudentsType.FETCH_VERIFIED_STUDENT_SUCCESS,
    payload: student,
  };
};

export const fetchVerifiedStudentFailure = (errorMessage) => {
  return {
    type: VerifiedStudentsType.FETCH_VERIFIED_STUDENT_FAILURE,
    payload: errorMessage,
  };
};
