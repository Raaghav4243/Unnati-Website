import CourseOverviewActionTypes from './course-overview.types';

const INITIAL_STATE = {
  isFetching: false,
  courseId: null,
  courseName: null,
  courseImageLink: null,
  courseSummary: null,
  courseAvailableAt: null,
  coursePrice: null,
  errorMessage: null,
};

const courseOverviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseOverviewActionTypes.SET_CURRENT_COURSE_FOR_OVERVIEW:
      // const courseId = action.payload;
      return {
        ...state,
        courseId: action.payload,
        courseName: null,
        courseImageLink: null,
        courseSummary: null,
        courseAvailableAt: null,
        coursePrice: null,
      };
    case CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_SUCCESS:
      const { courseName, _id, summary, fees } = action.payload;
      const coursePrice = fees[0].amount;
      return {
        ...state,
        isFetching: false,
        courseId: _id,
        courseName: courseName,
        // courseImageLink: null,
        courseSummary: summary,
        // courseAvailableAt: null,
        coursePrice: coursePrice,
      };
    case CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default courseOverviewReducer;
