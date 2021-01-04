import FeeAmountTypes from "./fee-amount.types";

const INTIAL_STATE = {
    feeAmount: null,
    isFetching: false,
    errorMessage: null
}

const feeAmountReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case FeeAmountTypes.FETCH_FEE_AMOUNT_START:
            return {
                ...state,
                isFetching: true
            }
        case FeeAmountTypes.FETCH_FEE_AMOUNT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                feeAmount: action.payload
            }
        case FeeAmountTypes.FETCH_FEE_AMOUNT_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default feeAmountReducer