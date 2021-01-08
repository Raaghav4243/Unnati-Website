import { UserActionTypes } from './user.types';

export const fetchUserStart = () => ({
  type: UserActionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = (user) => {
  return{
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: user
}};

export const fetchUserFailure = (errorMessage) => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  payload: errorMessage,
});

export const updateUserStart = (user_id, data) => {
  console.log('action data', data, 'action user id', user_id)
  return {
    type: UserActionTypes.UPDATE_USER_START,
    payload: {user_id: user_id, data: data}
  }
}

export const updateUserSuccess = (message) => {
  return{
    type: UserActionTypes.UPDATE_USER_SUCCESS,
    payload: message
  }
}

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
