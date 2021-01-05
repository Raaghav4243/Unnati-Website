import FeeAmountTypes from './fee-amount.types';

const INTIAL_STATE = {
  isFetching: false,
  paidAmount: null,
  dueAmount: null,
  errorMessage: null,
};

const feeAmountReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FeeAmountTypes.FETCH_FEE_AMOUNT_START:
      return {
        ...state,
        isFetching: true,
      };
    case FeeAmountTypes.FETCH_FEE_AMOUNT_SUCCESS:
      const { paidAmount, dueAmount } = action.payload;
      return {
        ...state,
        isFetching: false,
        paidAmount: paidAmount,
        dueAmount: dueAmount,
      };
    case FeeAmountTypes.FETCH_FEE_AMOUNT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default feeAmountReducer;
