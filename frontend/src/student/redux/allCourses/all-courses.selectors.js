import { createSelector } from 'reselect';

const selectCourses = (state) => state.allCourses;

export const selectAllCourses = createSelector(
  [selectCourses],
  (course) => course.allCourses
);

export const selectAllCoursesIdMap = createSelector(
  [selectCourses],
  (course) => course.allCoursesIdMap
);

export const selectIsAllCoursesFetching = createSelector(
  [selectCourses],
  (course) => course.isFetching
);

export const selectAllCafes = createSelector(
  [selectCourses],
  (course) => course.allCafes
);

export const selectIsAllCafesFetching = createSelector(
  [selectCourses],
  (course) => course.isFetchingCafes
);

// const selectCart = state => state.cart;

// export const selectCartItems = createSelector(
//   [selectCart],
//   cart => cart.cartItems
// );

// export const selectCartHidden = createSelector(
//   [selectCart],
//   cart => cart.hidden
// );

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity,
//       0
//     )
// );

// export const selectCartTotal = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity * cartItem.price,
//       0
//     )
// );
