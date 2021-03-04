import CafeActionTypes from '../../redux/cafe/cafe.types';

export const fetchUserCafeStart = () => ({
  type: CafeActionTypes.FETCH_CAFE_START,
});

export const fetchUserCafeSuccess = (userCafe) => ({
  type: CafeActionTypes.FETCH_CAFE_SUCCESS,
  payload: userCafe,
});

export const fetchUserCafeFailure = (errorMessage) => ({
  type: CafeActionTypes.FETCH_CAFE_FAILURE,
  payload: errorMessage,
});
