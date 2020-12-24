import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selecCurrentUserUserName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.username
);

export const selecCurrentUserFirstName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.firstName
);

export const selectCurrentUserLastName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.lastName
);

export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser._id
);

export const selectCurrentUserCafeId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.cafe_id
);

export const selectCurrentUserEmail = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.email
);

export const selectPhoneNumber = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.phoneNumber
);

export const selectCurrentUserRole = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.role
);
