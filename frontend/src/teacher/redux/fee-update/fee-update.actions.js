import { FeeUpdateTypes } from "./fee-update.types"

export const feeUpdateStart = (userId, data) => {
    return{
        type: FeeUpdateTypes.FEE_UPDATE_START,
        payload: {userId: userId, data: data}
    }
}

export const feeUpdateSuccess = (message) => {
    return{
        type: FeeUpdateTypes.FEE_UPDATE_SUCCESS,
        payload: message
    }
}

export const feeUpdateFailure = (error) => {
    return{
        type: FeeUpdateTypes.FEE_UPDATE_FAILURE,
        payload: error
    }
}