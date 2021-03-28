import AssignmentPageActionTypes from './assignment-page.types';

const INITIAL_STATE = {
  isFetching: false,
  isAssignmentSubmitting: false,
  messageFromBackend: null,
  maxMarksScored: null,
  maxMarksPossible: null,
  assignmentId: null,
  assignmentName: null,
  duration: null,
  questions: null,
  attemptsLeft: null,
  // assignmentIsSubmitting: false,
  submitConformation: null,
  submissionFailed: false,
  errorMessage: null,
};

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_START:
      return {
        ...state,
        isFetching: true,
        isAssignmentSubmitting: false,
        messageFromBackend: null,
        maxMarksScored: null,
        assignmentId: null,
        assignmentName: null,
        duration: null,
        maxMarksPossible: null,
        questions: null,
        attemptsLeft: null,
        submitConformation: false,
        submissionFailed: false,
        errorMessage: null,
      };
    case AssignmentPageActionTypes.FETCH_ASSIGNMENT_SUCCESS:
      if (action.payload.message) {
        const { message, marksScored } = action.payload;
        return {
          ...state,
          isFetching: false,
          messageFromBackend: message,
          maxMarksScored: marksScored,
        };
      } else {
        const {
          assignment: {
            questions,
            _id,
            // subjectName,
            assignmentName,
            duration,
            maxMarks,
          },
          marksScored,
          attemptsLeft,
        } = action.payload;
        return {
          ...state,
          isFetching: false,
          // submitConformation: null,
          // isAssignmentSubmitting: false,
          assignmentId: _id,
          assignmentName: assignmentName,
          // subjectName: subjectName,
          duration: duration,
          maxMarksPossible: maxMarks,
          maxMarksScored: marksScored,
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
      return {
        ...state,
        isAssignmentSubmitting: true,
        submissionFailed: false,
        submitConformation: null,
      };
    case AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        isAssignmentSubmitting: false,
        submitConformation: action.payload,
        // submissionFailed: false,
      };
    case AssignmentPageActionTypes.SUBMIT_ASSIGNMENT_FAILURE:
      return {
        ...state,
        isAssignmentSubmitting: false,
        submissionFailed: true,
        errorMessage: action.payload,
      };
    case AssignmentPageActionTypes.RESET_ASSIGNMENT_INFO:
      return {
        ...state,
        submitConformation: false,
        submissionFailed: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default assignmentReducer;
