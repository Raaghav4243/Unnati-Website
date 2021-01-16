import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  username: null,
  email: null,
  _id: null,
  cafe: null,
  firstName: null,
  lastName: null,
  phoneNumber: null,
  role: null,
  isFetching: false,
  isUserSigningIn: false,
  isUserSignedIn: false,
  didUserSignInFail: false,
  didUserSignUpFail: false,
  didUserSignOutFail: false,
  userIsUpdating: false,
  updateConfirmation: null,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isUserSigningIn: true,
        isUserSignedIn: false,
        didUserSignInFail: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      console.log('USER SIGNED IN!');
      console.log('USER PAYLOAD IS', action.payload);
      const {
        username,
        email,
        _id,
        cafe,
        firstName,
        lastName,
        phoneNumber,
        role,
      } = action.payload;
      return {
        ...state,
        // currentUser: action.payload,
        username: username,
        email: email,
        _id: _id,
        cafe: cafe,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        role: role,
        isUserSigningIn: false,
        isUserSignedIn: true,
        didUserSignInFail: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        username: null,
        email: null,
        _id: null,
        cafe: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        role: null,
        isUserSignedIn: false,
        didUserSignOutFail: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        didUserSignInFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        didUserSignOutFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        didUserSignUpFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.UPDATE_USER_START:
      return {
        ...state,
        userIsUpdating: true,
      };
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userIsUpdating: false,
        updateConfirmation: action.payload,
      };
    case UserActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        userIsUpdating: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
