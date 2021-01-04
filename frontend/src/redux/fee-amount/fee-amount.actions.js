import FeeAmountTypes from './fee-amount.types'

export const fetchFeeAmountStart = () => ({
    type: FeeAmountTypes.FETCH_FEE_AMOUNT_START
})

export const fetchFeeAmountSuccess = (feeAmount) => ({
    type: FeeAmountTypes.FETCH_FEE_AMOUNT_SUCCESS,
    payload: feeAmount
})

export const fetchFeeAmountFailure = (errorMessage) => ({
    type: FeeAmountTypes.FETCH_FEE_AMOUNT_FAILURE,
    payload: errorMessage
})

// export const fetchFeeAmountStartAsync = () => {
//     return async (dispatch, getState) => {
//         try {
//             dispatch(fetchFeeAmountStart())
//             const userId = getState().user._id
//             const cafeId = getState().user.cafe_id
//             let feeAmount = await fetch(`/FeesStatus/5fa6af42769f165e982b2ea9/cafe/5fa5796e9542c50df4285b04`)
//             feeAmount = await feeAmount.json()
//             feeAmount = feeAmount.user
//             console.log(feeAmount.user)
//             dispatch(fetchFeeAmountSuccess(feeAmount))
//         } catch (error) {
//             dispatch(fetchFeeAmountFailure(error.message))
//         }
//     }
// }