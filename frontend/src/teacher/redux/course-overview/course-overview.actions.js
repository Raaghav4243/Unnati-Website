import CourseOverviewActionTypes from './course-overview.types';

export const setCurrentCourseForOverview = (course_id) => ({
  type: CourseOverviewActionTypes.SET_CURRENT_COURSE_FOR_OVERVIEW,
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
