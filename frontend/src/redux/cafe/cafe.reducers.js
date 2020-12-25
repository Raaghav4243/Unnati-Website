import CafeActionTypes from './cafe.types';

const INITIAL_STATE = {
  isFetching: false,
  userCafe: null,
  errorMessage: undefined,
  cafe: null,
};

const cafeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CafeActionTypes.FETCH_CAFE_START:
      return {
        ...state,
        isFetching: true,
      };
    case CafeActionTypes.FETCH_CAFE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userCafe: action.payload,
      };
    case CafeActionTypes.FETCH_CAFE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cafeReducer;
