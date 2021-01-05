import AssignmentPageActionTypes from './assignment-page.types';

export const fetchAssignmentStart = (user_id, course_id, assignment_id) => {
  return {
    type: AssignmentPageActionTypes.FETCH_ASSIGNMENT_START,
    payload: {
      user_id: user_id,
      course_id: course_id,
      assignment_id: assignment_id,
    },
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
  console.log('action data', data)
  return{
    type: AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_START,
    payload: {data: data}
  }
}

export const submitAssignmentSuccess = (message) => {
  return{
  type: AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_SUCCESS,
  payload: message
  }
}