import AllCoursesActionTypes from './all-courses.types';

export const fetchAllCoursesStart = () => ({
  type: AllCoursesActionTypes.FETCH_ALL_COURSES_START,
});

export const fetchAllCoursesSuccess = (allCourses) => ({
  type: AllCoursesActionTypes.FETCH_ALL_COURSES_SUCCESS,
  payload: allCourses,
});

export const fetchAllCoursesFailure = (errorMessage) => ({
  type: AllCoursesActionTypes.FETCH_ALL_COURSES_FAILURE,
  payload: errorMessage,
});