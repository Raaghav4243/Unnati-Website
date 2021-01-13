import { testSheetTypes } from "./test-sheet.types"

const INTIAL_STATE = {
    isUpdating: false,
    errorMessage: null,
    updateConformation: null,
    testResponse: null
}

const testSheetReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){
        case testSheetTypes.FETCH_SUBMITTED_TEST_START:
            return{
                ...state,
                isUpdating: true
            }
        case testSheetTypes.FETCH_SUBMITTED_TEST_SUCCESS:
            return{
                ...state,
                isUpdating: false,
                testResponse: action.payload
            }
        case testSheetTypes.FETCH_SUBMITTED_TEST_FAILURE:
            return{
                ...state,
                isUpdating: false,
                errorMessage: action.payload
            }
        default: 
            return{...state}
    }
}

export default testSheetReducer