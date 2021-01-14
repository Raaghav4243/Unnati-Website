import TestPageActionTypes from './testpage.types';

const INITIAL_STATE = {
  isFetching: false,
  isTestSubmitting: false,
  messageFromBackend: null,
  testId: null,
  testName: null,
  // subjectName: null,
  duration: null,
  maxMarksPossible: null,
  questions: null,
  submitConformation: null,
  submissionFailed: false,
  errorMessage: null,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TestPageActionTypes.FETCH_TEST_START:
      return {
        ...state,
        isFetching: true,
        isTestSubmitting: false,
        messageFromBackend: null,
        testId: null,
        testName: null,
        // subjectName: null,
        duration: null,
        maxMarksPossible: null,
        questions: null,
        submitConformation: null,
        submissionFailed: false,
        errorMessage: null,
      };
    case TestPageActionTypes.FETCH_TEST_SUCCESS:
      // const {
      //   test: { questions, _id, subjectName, testName, duration, maxMarks },
      //   message,
      // } = action.payload;
      if (action.payload.message) {
        return {
          ...state,
          isFetching: false,
          messageFromBackend: action.payload.message,
        };
      } else {
        const {
          test: {
            questions,
            _id,
            // subjectName,
            testName,
            duration,
            maxMarks,
          },
        } = action.payload;
        return {
          ...state,
          isFetching: false,
          testId: _id,
          testName: testName,
          // subjectName: subjectName,
          duration: duration,
          maxMarksPossible: maxMarks,
          questions: questions,
        };
      }
    case TestPageActionTypes.FETCH_TEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case TestPageActionTypes.SUBMIT_TEST_START:
      return {
        ...state,
        isTestSubmitting: true,
        submissionFailed: false,
        submitConformation: null,
      };
    case TestPageActionTypes.SUBMIT_TEST_SUCCESS:
      return {
        ...state,
        isTestSubmitting: false,
        submitConformation: action.payload,
        submissionFailed: false,
      };
    case TestPageActionTypes.SUBMIT_TEST_FAILURE:
      return {
        ...state,
        isTestSubmitting: false,
        submissionFailed: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
