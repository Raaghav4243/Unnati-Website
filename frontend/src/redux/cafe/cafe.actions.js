import CafeActionTypes from '../../redux/cafe/cafe.types';
import { selectCurrentUserCafeId } from '../user/user.selectors';

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
const cafeId = ' 5fa5796e9542c50df4285b04';

export const fetchUserCafeStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserCafeStart());
      // const cafeId = selectCurrentUserCafeId();
      // console.log('cafeId = ' + cafeId);
      let userCafe = await fetch(`/cafeinformation/${cafeId}`);
      userCafe = await userCafe.json();
      console.log(userCafe.cafe);
      dispatch(fetchUserCafeSuccess(userCafe));
    } catch (error) {
      dispatch(fetchUserCafeFailure(error.message));
    }
  };
};
