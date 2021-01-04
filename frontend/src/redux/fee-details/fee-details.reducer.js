// import FeeDetailTypes from "./fee-datails.types";

// const INTIAL_STATE = {
//     isFetching: false,
//     feeDetails: null,
//     errorMessage: null
// }

// const feeReducer = (state = INTIAL_STATE, action) => {
//     switch (action.type) {
//         case FeeDetailTypes.FETCH_FEE_DETAILS_START:
//             return {
//                 ...state,
//                 isFetching: true
//             }
//         case FeeDetailTypes.FETCH_FEE_DETAILS_SUCCESS:
//             return{
//                 ...state,
//                 isFetching: false,
//                 feeDetails: action.payload  
//             }
//         case FeeDetailTypes.FETCH_FEE_DETAILS_FAILURE:
//             return{
//                 ...state,
//                 isFetching: false,
//                 errorMessage: action.payload
//             }
//     }
// }

// export default feeReducer