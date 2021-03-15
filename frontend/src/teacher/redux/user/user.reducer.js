import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  username: null,
  firstName: null,
  lastName: null,
  _id: null,
  cafe: null,
  email: null,
  phoneNumber: null,
  role: null,
  isUserSigningIn: false,
  isUserSignedIn: false,
  didUserSignInFail: false,
  isUserSigningUp: false,
  wasSignUpSuccessful: false,
  didUserSignUpFail: false,
  didUserSignOutFail: false,
  didUserSessionExpire: false,
  userIsUpdating: false,
  updateConfirmation: null,
  updationFailed: false,
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
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        didUserSignOutFail: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        isUserSigningUp: true,
        wasSignUpSuccessful: false,
        didUserSignUpFail: false,
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
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isUserSigningUp: false,
        wasSignUpSuccessful: true,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isUserSigningIn: false,
        didUserSignInFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        didUserSignOutFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.USER_SESSION_EXPIRED:
      return {
        ...state,
        didUserSessionExpire: true,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isUserSigningUp: false,
        didUserSignUpFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.RESET_SIGN_IN_INFO:
      return {
        ...state,
        didUserSignInFail: false,
        errorMessage: null,
      };
    case UserActionTypes.RESET_SIGN_UP_INFO:
      return {
        ...state,
        wasSignUpSuccessful: false,
        didUserSignUpFail: false,
        errorMessage: null,
      };
    case UserActionTypes.UPDATE_USER_START:
      return {
        ...state,
        userIsUpdating: true,
        updationFailed: false,
        updateConfirmation: null,
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
        updationFailed: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.RESET_UPDATE_INFO:
      return {
        ...state,
        updateConfirmation: null,
        updationFailed: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default userReducer;
