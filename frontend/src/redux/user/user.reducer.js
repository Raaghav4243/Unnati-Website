import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: {
    username: 'samar123',
    email: 'a@c.com',
    _id: '5fa6af42769f165e982b2ea9',
    cafe_id: '5fa5796e9542c50df4285b04',
    firstName: 'Samar',
    lastName: 'singh',
    phoneNumber: '1234567890',
    role: 'STUDENT',
  },
  isFetching: false,
  errorMessage: undefined,
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
    default:
      return state;
  }
};

export default userReducer;
