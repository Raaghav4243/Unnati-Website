import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectCurrentUserUserName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.username
);

export const selectCurrentUserFirstName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.firstName,
  );

export const selectCurrentUserLastName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.lastName
);


export const selectCurrentUserCafeId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.cafe
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
export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser._id
);