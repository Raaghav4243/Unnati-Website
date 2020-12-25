import CafeActionTypes from '../../redux/cafe/cafe.types';

export const fetchUserCafeStart = () => ({
    type: CafeActionTypes.FETCH_CAFE_START
})

export const fetchUserCafeSuccess = ( UserCafe) => ({
    type: CafeActionTypes.FETCH_CAFE_SUCCESS,
    payload: UserCafe,
})

export const fetchUserCafeFailure = (errorMessage) => ({
    type: CafeActionTypes.FETCH_CAFE_FAILURE,
    payload: errorMessage,
})
const cafeId='5fa5796e9542c50df4285b04';

export const fetchUserCafeStartAsync = () => {
return async (dispatch) => {
    try {
        dispatch(fetchUserCafeStart());
        let UserCafe = await fetch(`/cafeinformation/${cafeId}`);
        UserCafe = await UserCafe.json();
        console.log(UserCafe);
        dispatch(fetchUserCafeSuccess(UserCafe));
    } catch (error) {
        dispatch(fetchUserCafeFailure(error.message));
    }
};
};