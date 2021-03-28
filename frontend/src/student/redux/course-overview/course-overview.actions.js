import CourseOverviewActionTypes from './course-overview.types';

export const setCurrentCourseForOverview = (course_id) => ({
  type: CourseOverviewActionTypes.SET_CURRENT_COURSE_FOR_OVERVIEW,
  payload: course_id,
});

export const setCurrentCourseForOverviewForHome = (course_id) => ({
  type: CourseOverviewActionTypes.SET_CURRENT_COURSE_FOR_OVERVIEW_FOR_HOME,
  payload: course_id,
});

export const fetchCourseForOverviewStart = () => {
  return {
    type: CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_START,
  };
};

export const fetchCourseForOverviewSuccess = (courseOverviewDetails) => ({
  type: CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_SUCCESS,
  payload: courseOverviewDetails,
});

export const fetchCourseForOverviewFailure = (errorMessage) => ({
  type: CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_FAILURE,
  payload: errorMessage,
});

export const fetchCourseForOverviewForHomeStart = () => {
  return {
    type: CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_FOR_HOME_START,
  };
};

export const fetchCourseForOverviewForHomeSuccess = (
  courseOverviewDetails
) => ({
  type: CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_FOR_HOME_SUCCESS,
  payload: courseOverviewDetails,
});

export const fetchCourseForOverviewForHomeFailure = (errorMessage) => ({
  type: CourseOverviewActionTypes.FETCH_COURSE_FOR_OVERVIEW_FOR_HOME_FAILURE,
  payload: errorMessage,
});
