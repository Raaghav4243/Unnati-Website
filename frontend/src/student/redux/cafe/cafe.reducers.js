import CafeActionTypes from './cafe.types';

const INITIAL_STATE = {
  isFetching: false,
  userCafeDetails: null,
  number_of_classmates: null,
  errorMessage: undefined,
};

const cafeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CafeActionTypes.FETCH_CAFE_START:
      return {
        ...state,
        isFetching: true,
      };
    case CafeActionTypes.FETCH_CAFE_SUCCESS:
      const { cafe, userNumbers } = action.payload;
      return {
        ...state,
        isFetching: false,
        userCafeDetails: cafe,
        number_of_classmates: userNumbers - 1, // we have subtracted 2 because one is the user itself and the other is the teacher.
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
