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
      // const {
      //   test: { questions, _id, subjectName, testName, duration, maxMarks },
      //   message,
      // } = action.payload;
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
          // test: { questions, _id, subjectName, testName, duration, maxMarks },
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
    default:
      return state;
  }
};

export default assignmentReducer;
