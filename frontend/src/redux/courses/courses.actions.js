import CourseActionTypes from './courses.types';

// const { default: Axios } = require('axios');

export const fetchAllCoursesStart = () => ({
  type: CourseActionTypes.FETCH_ALL_COURSES_START,
});

export const fetchAllCoursesSuccess = (allCoursesArray) => ({
  type: CourseActionTypes.FETCH_ALL_COURSES_SUCCESS,
  payload: allCoursesArray,
});

export const fetchAllCoursesFailure = (errorMessage) => ({
  type: CourseActionTypes.FETCH_ALL_COURSES_FAILURE,
  payload: errorMessage,
});

export const fetchAllCoursesStartAsync = () => {
  //using promises

  // return (dispatch) => {
  //   dispatch(fetchAllCoursesStart());
  //   fetch('/all-courses')
  //     .then((response) => response.json())
  //     .then((allCoursesResponse) => {
  //       const allCoursesArray = allCoursesResponse.courses;
  //       console.log(allCoursesArray);
  //       dispatch(fetchAllCoursesSuccess(allCoursesArray));
  //     })
  //     .catch((error) => dispatch(fetchAllCoursesFailure(error.message)));
  // };

  //using async/await

  return async (dispatch) => {
    try {
      dispatch(fetchAllCoursesStart());
      let allCourses = await fetch('/all-courses');
      allCourses = await allCourses.json();
      console.log(allCourses);
      allCourses = allCourses.courses;
      dispatch(fetchAllCoursesSuccess(allCourses));
    } catch (error) {
      dispatch(fetchAllCoursesFailure(error.message));
    }
  };
};
