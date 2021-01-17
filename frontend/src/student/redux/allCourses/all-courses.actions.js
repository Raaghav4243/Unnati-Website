import AllCoursesActionTypes from './all-courses.types';

// const { default: Axios } = require('axios');

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

export const fetchAllCafesStart = () => ({
  type: AllCoursesActionTypes.FETCH_ALL_CAFES_START,
});

export const fetchAllCafesSuccess = (allCourses) => ({
  type: AllCoursesActionTypes.FETCH_ALL_CAFES_SUCCESS,
  payload: allCourses,
});

export const fetchAllCafesFailure = (errorMessage) => ({
  type: AllCoursesActionTypes.FETCH_ALL_CAFES_FAILURE,
  payload: errorMessage,
});

// export const fetchAllCoursesStartAsync = () => {
//   //using promises

//   // return (dispatch) => {
//   //   dispatch(fetchAllCoursesStart());
//   //   fetch('/all-courses')
//   //     .then((response) => response.json())
//   //     .then((allCoursesResponse) => {
//   //       const allCoursesArray = allCoursesResponse.courses;
//   //       console.log(allCoursesArray);
//   //       dispatch(fetchAllCoursesSuccess(allCoursesArray));
//   //     })
//   //     .catch((error) => dispatch(fetchAllCoursesFailure(error.message)));
//   // };

//   //using async/await

//   return async (dispatch) => {
//     try {
//       dispatch(fetchAllCoursesStart());
//       let allCourses = await fetch('/all-courses');
//       allCourses = await allCourses.json();
//       // console.log(allCourses);
//       allCourses = allCourses.courses;
//       dispatch(fetchAllCoursesSuccess(allCourses));
//     } catch (error) {
//       dispatch(fetchAllCoursesFailure(error.message));
//     }
//   };
// };
