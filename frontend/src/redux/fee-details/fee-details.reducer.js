import FeeDetailTypes from "./fee-datails.types";

const INTIAL_STATE = {
    isFetching: false,
    receipts: null,
    errorMessage: null
}

const feeReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case FeeDetailTypes.FETCH_FEE_DETAILS_START:
            return {
                ...state,
                isFetching: true
            }
        case FeeDetailTypes.FETCH_FEE_DETAILS_SUCCESS:
            const {receipts} = action.payload
            return{
                ...state,
                isFetching: false,
                receipts: receipts  
            }
        case FeeDetailTypes.FETCH_FEE_DETAILS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
        return state
    }
}

export default feeReducer