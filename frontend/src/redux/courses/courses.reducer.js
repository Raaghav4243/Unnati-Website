const INITIAL_STATE = {
  allCourses: [],
  /*
  Each course's :
    courseId,
    courseName,
    courseAvailableAtCafes,
    courseSummary,
*/
  enrolledCourses: [],
  currentCourse: undefined,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// import CartActionTypes from './cart.types';
// import { addItemToCart, removeItemFromCart } from './cart.utils';

// const INITIAL_STATE = {
//   hidden: true,
//   cartItems: []
// };

// const cartReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case CartActionTypes.TOGGLE_CART_HIDDEN:
//       return {
//         ...state,
//         hidden: !state.hidden
//       };
//     case CartActionTypes.ADD_ITEM:
//       return {
//         ...state,
//         cartItems: addItemToCart(state.cartItems, action.payload)
//       };
//     case CartActionTypes.REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: removeItemFromCart(state.cartItems, action.payload)
//       };
//     case CartActionTypes.CLEAR_ITEM_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           cartItem => cartItem.id !== action.payload.id
//         )
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;





all_courses : [],
enrolled_courses : [],

all_courses : [
  {
    course_name: 'MS EXCEL',
  },{course_name: 'MS PPT',},{},{}
]