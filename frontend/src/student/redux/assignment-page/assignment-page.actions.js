import AssignmentPageActionTypes from './assignment-page.types';

export const fetchAssignmentStart = () => {
  return {
    type: AssignmentPageActionTypes.FETCH_ASSIGNMENT_START,
  };
};

export const fetchAssignmentSuccess = (courseAssignmentDetails) => ({
  type: AssignmentPageActionTypes.FETCH_ASSIGNMENT_SUCCESS,
  payload: courseAssignmentDetails,
});

export const fetchAssignmentFailure = (errorMessage) => ({
  type: AssignmentPageActionTypes.FETCH_ASSIGNMENT_FAILURE,
  payload: errorMessage,
});

export const submitAssignmentStart = (data) => {
  // console.log('action data', data);
  return {
    type: AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_START,
    payload: { data: data },
  };
};

export const submitAssignmentSuccess = (message) => {
  return {
    type: AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_SUCCESS,
    payload: message,
  };
};

export const submitAssignmentFailure = (message) => {
  return {
    type: AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_FAILURE,
    payload: message,
  };
};

export const resetAssignmentInfo = () => {
  return {
    type: AssignmentPageActionTypes.RESET_ASSIGNMENT_INFO,
  };
};
