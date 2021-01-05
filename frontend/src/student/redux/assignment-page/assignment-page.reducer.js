import { RiTruckLine } from 'react-icons/ri';
import AssignmentPageActionTypes from './assignment-page.types';

const INITIAL_STATE = {
  isFetching: false,
  isAssignmentSubmitting: false,
  message: null,
  marksScored: null,
  assignmentId: null,
  assignmentName: null,
  duration: null,
  maxMarks: null,
  questions: null,
  attemptsLeft: null,
  errorMessage: null,
  assignmentIsSubmitting: false,
  submitConformation: null
};

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_START:
      return {
        ...state,
        isFetching: true,
        isAssignmentSubmitting: false,
        message: null,
        marksScored: null,
        assignmentId: null,
        assignmentName: null,
        duration: null,
        maxMarks: null,
        questions: null,
        attemptsLeft: null,
        errorMessage: null,
      };
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_SUCCESS:
      if (action.payload.message) {
        const { message, marksScored } = action.payload;
        return {
          ...state,
          isFetching: false,
          message: message,
          marksScored: marksScored,
        };
      } else {
        const {
          assignment: {
            questions,
            _id,
            subjectName,
            assignmentName,
            duration,
            maxMarks,
          },
          attemptsLeft,
        } = action.payload;
        return {
          ...state,
          isFetching: false,
          assignmentId: _id,
          assignmentName: assignmentName,
          subjectName: subjectName,
          duration: duration,
          maxMarks: maxMarks,
          questions: questions,
          attemptsLeft: attemptsLeft,
        };
      }
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_START:
      return{
        ...state,
        assignmentIsSubmitting: true
      }
    case AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_SUCCESS:
      return{
        ...state,
        assignmentIsSubmitting: false,
        submitConformation: action.payload
      }
    default:
      return state;
  }
};

export default assignmentReducer;