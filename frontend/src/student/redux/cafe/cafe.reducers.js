import CafeActionTypes from './cafe.types';

const INITIAL_STATE = {
  isFetching: false,
  cafeId: null,
  cafeAddress: null,
  cafeLocation: null,
  cafeName: null,
  teacherInChargeName: null,
  teacherInChargeId: null,
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
      const {
        cafe: { _id, address, location, name },
        userNumbers,
        users,
      } = action.payload;
      const teacherObj = users.find((user) => user.role === 'TEACHER');
      // console.log('TEACHER', teacherObj);
      return {
        ...state,
        isFetching: false,
        errorMessage: undefined,
        cafeId: _id,
        cafeAddress: address,
        cafeLocation: location,
        cafeName: name,
        teacherInChargeName: `${teacherObj.firstName} ${teacherObj.lastName}`,
        teacherInChargeId: teacherObj._id,
        number_of_classmates: userNumbers, // we have subtracted 1 because one is the user itself.
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
