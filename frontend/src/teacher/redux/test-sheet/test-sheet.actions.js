import { testSheetTypes } from "./test-sheet.types"

export const fetchTestSheetStart = (responseSheetId, courseId) => {
    return{
        type: testSheetTypes.FETCH_SUBMITTED_TEST_START,
        payload: {responseSheetId: responseSheetId, courseId:courseId}
    }
}

export const fetchTestSheetSuccess = (test, courseId) => {
    return{
        type: testSheetTypes.FETCH_SUBMITTED_TEST_SUCCESS,
        payload: {test, courseId}
    }
}

export const fetchTestSheetFailure = (message) => {
    return{
        type: testSheetTypes.FETCH_SUBMITTED_TEST_FAILURE,
        payload: message
    }
}