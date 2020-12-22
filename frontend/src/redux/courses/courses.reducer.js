import CourseActionTypes from "./courses.types";

const INITIAL_STATE = {
  allCourses: []
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseActionTypes.FETCH_ALL_COURSES_START:
      return{
        ...state,
        isFetching: true
      };
    case CourseActionTypes.FETCH_ALL_COURSES_SUCCESS:
      return{
        ...state,
        isFetching: false,
        courses: action.payload
      };

    case CourseActionTypes.FETCH_ALL_COURSES_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    
    default:
      return {...state};
  }
};

export default courseReducer



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





//]