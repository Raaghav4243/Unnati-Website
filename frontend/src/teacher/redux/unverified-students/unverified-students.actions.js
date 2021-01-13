import { UnVerifiedStudentsType } from "./unverified-students.types";

export const fetchUnVerifiedStudentStart = () => {
  return {
    type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START,
  };
};

export const fetchUnVerifiedStudentSuccess = (student) => {
  return {
    type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_SUCCESS,
    payload: student,
  };
};

export const fetchUnVerifiedStudentFailure = (errorMessage) => {
  return {
    type: UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_FAILURE,
    payload: errorMessage,
  };
};

export const approveStudentStart = (studentId) => {
  return{
    type: UnVerifiedStudentsType.APPROVE_STUDENT_START,
    payload: {studentId: studentId}
  }
}

export const approveStudentSuccess = (message) => {
  return{
    type: UnVerifiedStudentsType.APPROVE_STUDENT_SUCCESS,
    payload: message
  }
}

export const approveStudentFailure = (error) => {
  return{
    type: UnVerifiedStudentsType.APPROVE_STUDENT_FAILURE,
    payload: error
  }
}