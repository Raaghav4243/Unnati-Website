import FeeAmountTypes from './fee-amount.types';

export const fetchFeeAmountStart = () => {
  console.log('FEE ACTION , FEE AMOUNT START ');
  return {
    type: FeeAmountTypes.FETCH_FEE_AMOUNT_START,
  };
};

export const fetchFeeAmountSuccess = (feeAmount) => ({
  type: FeeAmountTypes.FETCH_FEE_AMOUNT_SUCCESS,
  payload: feeAmount,
});

export const fetchFeeAmountFailure = (errorMessage) => ({
  type: FeeAmountTypes.FETCH_FEE_AMOUNT_FAILURE,
  payload: errorMessage,
});
