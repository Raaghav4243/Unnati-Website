import FeeDetailTypes from "./fee-datails.types"

export const fetchFeeDetailStart = (user_id) => ({
    type: FeeDetailTypes.FETCH_FEE_DETAILS_START,
    payload: {user_id: user_id}
})

export const fetchFeeDetailSuccess = (feeDetail) => ({
    type: FeeDetailTypes.FETCH_FEE_DETAILS_SUCCESS,
    payload: feeDetail
})

export const fetchFeeDetailFailure = (errorMessage) => ({
    type: FeeDetailTypes.FETCH_FEE_DETAILS_FAILURE,
    payload: errorMessage
})

// export const fetchFeeDetailStartAsync = () => {
//     return async (dispatch, getState) => {
//         try {
//             dispatch(fetchFeeDetailStart())
//             const userId = getState().user._id
//             const cafeId = getState().user.cafe_id
//             let feeDetail = await fetch(`/user-receipts/${userId}`)
//             feeDetail = await feeDetail.json()
//             console.log(feeDetail.userReceipts)
//             dispatch(fetchFeeDetailSuccess(feeDetail))
//         } catch (error) {
//             dispatch(fetchFeeDetailFailure(error.message))
//         }
//     }
// }