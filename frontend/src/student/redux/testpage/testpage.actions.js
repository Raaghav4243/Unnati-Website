import TestPageActionTypes from './testpage.types';

export const fetchTestStart = () => {
  return {
    type: TestPageActionTypes.FETCH_TEST_START,
  };
};

export const fetchTestSuccess = (courseTestDetails) => ({
  type: TestPageActionTypes.FETCH_TEST_SUCCESS,
  payload: courseTestDetails,
});

export const fetchTestFailure = (errorMessage) => ({
  type: TestPageActionTypes.FETCH_TEST_FAILURE,
  payload: errorMessage,
});

export const submitTestStart = (data) => {
  console.log('action data', data);
  return {
    type: TestPageActionTypes.SUBMIT_TEST_START,
    payload: { data: data },
  };
};

export const submitTestSuccess = (message) => {
  return {
    type: TestPageActionTypes.SUBMIT_TEST_SUCCESS,
    payload: message,
  };
};

export const submitTestFailure = (message) => {
  return {
    type: TestPageActionTypes.SUBMIT_TEST_FAILURE,
    payload: message,
  };
};

export const resetTestInfo = () => {
  return {
    type: TestPageActionTypes.RESET_TEST_INFO,
  };
};
