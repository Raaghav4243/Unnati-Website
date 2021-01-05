import CourseActionTypes from './courses.types';

const INITIAL_STATE = {
  isFetching: false,
  allCourses: null,
  errorMessage: undefined,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseActionTypes.FETCH_ALL_COURSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case CourseActionTypes.FETCH_ALL_COURSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allCourses: action.payload,
      };
    case CourseActionTypes.FETCH_ALL_COURSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
