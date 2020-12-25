import CafeActionTypes from '../../redux/cafe/cafe.types';
import { selectCurrentUserCafeId } from '../user/user.selectors';

export const fetchUserCafeStart = () => ({
  type: CafeActionTypes.FETCH_CAFE_START,
});

export const fetchUserCafeSuccess = (UserCafe) => ({
  type: CafeActionTypes.FETCH_CAFE_SUCCESS,
  payload: UserCafe,
});

export const fetchUserCafeFailure = (errorMessage) => ({
  type: CafeActionTypes.FETCH_CAFE_FAILURE,
  payload: errorMessage,
});

export const fetchUserCafeStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserCafeStart());
      const cafeId = selectCurrentUserCafeId();
      console.log('cafeId = ' + cafeId);
      let cafeDetails = await fetch(`/cafeinformation/${cafeId}`);
      cafeDetails = await cafeDetails.json();
      console.log(cafeDetails);
      dispatch(fetchUserCafeSuccess(cafeDetails));
    } catch (error) {
      dispatch(fetchUserCafeFailure(error.message));
    }
  };
};
