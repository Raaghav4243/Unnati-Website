import TestPageActionTypes from './testpage.types';

const INITIAL_STATE = {
  isFetching: false,
  isTestSubmitting: false,
  message: null,
  testId: null,
  testName: null,
  subjectName: null,
  duration: null,
  maxMarks: null,
  questions: null,
  errorMessage: null,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TestPageActionTypes.FETCH_TEST_START:
      return {
        ...state,
        isFetching: true,
        isTestSubmitting: false,
        message: null,
        testId: null,
        testName: null,
        subjectName: null,
        duration: null,
        maxMarks: null,
        questions: null,
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
          message: action.payload.message,
        };
      } else {
        const {
          test: { questions, _id, subjectName, testName, duration, maxMarks },
        } = action.payload;
        return {
          ...state,
          isFetching: false,
          testId: _id,
          testName: testName,
          subjectName: subjectName,
          duration: duration,
          maxMarks: maxMarks,
          questions: questions,
        };
      }
    case TestPageActionTypes.FETCH_TEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
