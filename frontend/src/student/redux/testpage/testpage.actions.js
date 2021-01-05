import TestPageActionTypes from './testpage.types';

export const fetchTestStart = (user_id, course_id, test_id) => {
  // console.log(
  //   'User id inside start action' + user_id,
  //   'Course id inside start action' + course_id,
  //   'Test id inside start action' + test_id
  // );
  return {
    type: TestPageActionTypes.FETCH_TEST_START,
    payload: { user_id: user_id, course_id: course_id, test_id: test_id },
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
