import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user);

export const selectCurrentUserUserName = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.username
);

export const selectCurrentUserFirstName = createSelector(
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

export const selectIsUserSigningIn = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.isUserSigningIn
);

export const selectIsUserSignedIn = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.isUserSignedIn
);

export const selectDidUserSignInFail = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.didUserSignInFail
);

export const selectIsUserSigningUp = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.isUserSigningUp
);

export const selectWasSignUpSuccessful = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.wasSignUpSuccessful
);

export const selectDidUserSignUpFail = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.didUserSignUpFail
);

export const selectDidUserSignOutFail = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.didUserSignOutFail
);

export const selectIsUserUpdating = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.userIsUpdating
);

export const selectUpdateConfirmation = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.updateConfirmation
);

export const selectUserUpdationFailed = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.updationFailed
);

export const selectUserReducerError = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.errorMessage
);
