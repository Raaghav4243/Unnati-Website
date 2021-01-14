import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  // currentUser: {
  //   username: null,
  //   email: null,
  //   _id: null,
  //   cafe: null,
  //   firstName: null,
  //   lastName: null,
  //   phoneNumber: null,
  //   role: null,
  // },
  // currentUser: {},
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
  errorMessage: undefined,
  userIsUpdating: false,
  updateConfirmation: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isUserSigningIn: true,
        isUserSignedIn: false,
        error: null,
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
        error: null,
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
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      // const {username, email, _id, lastName,
      //    firstName, phoneNumber, role, cafe} = action.payload
      return {
        ...state,
        isFetching: false,
        // isUserSignedIn: true,
        currentUser: action.payload,
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
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
    default:
      return state;
  }
};

export default userReducer;
