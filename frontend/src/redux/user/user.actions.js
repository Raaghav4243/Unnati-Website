import UserActionTypes from './user.types';

export const fetchUserStart = () => ({
  type: UserActionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = (user) => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (errorMessage) => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
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
