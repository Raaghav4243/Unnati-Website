// import CartActionTypes from './cart.types';

import CourseActionTypes from "./courses.types";

// export const toggleCartHidden = () => ({
//   type: CartActionTypes.TOGGLE_CART_HIDDEN
// });

// export const addItem = item => ({
//   type: CartActionTypes.ADD_ITEM,
//   payload: item
// });

// export const removeItem = item => ({
//   type: CartActionTypes.REMOVE_ITEM,
//   payload: item
// });

// export const clearItemFromCart = item => ({
//   type: CartActionTypes.CLEAR_ITEM_FROM_CART,
//   payload: item
// });

/* export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
}; */

export const fetchAllCoursesStart = () => ({
    type: CourseActionTypes.FETCH_ALL_COURSES
  });
  


export const fetchAllCoursesStartAsync = async () => {
    return dispatch => {
        let allCourses = await fetch('/all-courses');
        dispatch(fetchAllCoursesStart())

        allCourses = allCourses.json();
        console.log(allCourses)
    }
}