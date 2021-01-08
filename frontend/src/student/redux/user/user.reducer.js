import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: {
    username: null,
    email: null,
    _id: null,
    cafe: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    role: null,
  },
  isFetching: false,
  errorMessage: undefined,
  userIsUpdating: false,
  updateConformation: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      const {username, email, _id, lastName,
         firstName, phoneNumber, role, cafe} = action.payload
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case UserActionTypes.UPDATE_USER_START:
      return{
        ...state,
        userIsUpdating: true
      }
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return{
        ...state,
        userIsUpdating: false,
        updateConformation: action.payload
      }
    
    default:
      return state;
  }
};

export default userReducer;
