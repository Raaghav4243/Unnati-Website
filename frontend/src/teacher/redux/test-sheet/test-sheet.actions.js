import { testSheetTypes } from "./test-sheet.types"

export const fetchTestSheetStart = (responseSheetId) => {
    console.log('actions page data', responseSheetId)
    return{
        type: testSheetTypes.FETCH_SUBMITTED_TEST_START,
        payload: {responseSheetId: responseSheetId}
    }
}

export const fetchTestSheetSuccess = (test) => {
    return{
        type: testSheetTypes.FETCH_SUBMITTED_TEST_SUCCESS,
        payload: test
    }
}

export const fetchTestSheetFailure = (message) => {
    return{
        type: testSheetTypes.FETCH_SUBMITTED_TEST_FAILURE,
        payload: message
    }
}