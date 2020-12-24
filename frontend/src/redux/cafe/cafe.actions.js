import { CafeActionTypes } from "./cafe.types";

export const fetchUserCafeStart = () => ({
    type: CafeActionTypes.FETCH_CAFE_START
})

export const fetchUserCafeSuccess = () => ({
    type: CafeActionTypes.FETCH_CAFE_SUCCESS,
    payload: userCafe
})

export const fetchUserCafeFailure = () => ({
    type: CafeActionTypes.FETCH_CAFE_FAILURE,
    payload: errorMessage
})

// return async (dispatch) => {
// try {
//     dispatch(fetchUserCafeStart());
//       let allCourses = await fetch('/all-courses');
//       UserCafe = await UserCafe.json();
//       console.log(UserCafe);
//       UserCafe = UserCafe.courses;
//       dispatch(fetchAllCoursesSuccess(allCourses));
//     } catch (error) {
//       dispatch(fetchAllCoursesFailure(error.message));
//     }
//   };
// };