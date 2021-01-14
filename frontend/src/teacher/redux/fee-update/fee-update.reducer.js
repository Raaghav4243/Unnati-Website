import { FeeUpdateTypes } from "./fee-update.types"

const INITIAL_STATE = {
    isUpdating: false,
    errorMessage: null,
    updateConfirmation: null
}

const feeUpdateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FeeUpdateTypes.FEE_UPDATE_START:
            return{
                ...state,
                isUpdating: true
            }
            case FeeUpdateTypes.FEE_UPDATE_SUCCESS:
                return{
                    ...state,
                    isUpdating: false,
                    updateConfirmation: action.payload
                }
            case FeeUpdateTypes.FEE_UPDATE_FAILURE:
                return{
                    state,
                    isUpdating: false,
                    errorMessage: action.payload
                }
            default: 
                return{...state}
    }
}

export default feeUpdateReducer