import { TestPageActionTypes } from './testpage.types';

export const fetchTestStart = () => ({
  type: TestPageActionTypes.FETCH_TEST_START,
});

export const fetchUserSuccess = (testDetails) => ({
  type: TestPageActionTypes.FETCH_TEST_SUCCESS,
  payload: testDetails,
});

export const fetchUserFailure = (errorMessage) => ({
  type: TestPageActionTypes.FETCH_TEST_FAILURE,
  payload: errorMessage,
});

export const fetchUserStartAsync = () => {
  //using async/await

  return async (dispatch) => {
    try {
      //   dispatch(fetchUserStart());
      //   let allCourses = await fetch('/all-courses');
      //   allCourses = await allCourses.json();
      //   allCourses = allCourses.courses;
      //   dispatch(fetchAllCoursesSuccess(allCourses));
    } catch (error) {
      //   dispatch(fetchAllCoursesFailure(error.message));
    }
  };
};
