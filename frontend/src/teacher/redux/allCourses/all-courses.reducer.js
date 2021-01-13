import AllCoursesActionTypes from './all-courses.types';

const INITIAL_STATE = {
  isFetching: false,
  allCourses: null,
  allCoursesIdMap: null,
  errorMessage: undefined,
};

const allCoursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AllCoursesActionTypes.FETCH_ALL_COURSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case AllCoursesActionTypes.FETCH_ALL_COURSES_SUCCESS:
      const allCourses = action.payload;
      let allCoursesIdMap = {};
      allCourses.forEach((courseAvailable) => {
        allCoursesIdMap[courseAvailable._id] = courseAvailable.courseName;
      });
      return {
        ...state,
        isFetching: false,
        allCourses: allCourses,
        allCoursesIdMap: allCoursesIdMap,
      };
    case AllCoursesActionTypes.FETCH_ALL_COURSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default allCoursesReducer;
