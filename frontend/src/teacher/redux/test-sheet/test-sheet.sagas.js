import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTestSheetFailure, fetchTestSheetSuccess } from "./test-sheet.actions";
import { testSheetTypes } from "./test-sheet.types";

export function* fetchTestStartAsync({payload: {responseSheetId, courseId}}){
    try {
        console.log('saga data', responseSheetId)
        let test = yield fetch(`/requestTestEvaluate/${responseSheetId}`)
        test = yield test.json()
        yield put(fetchTestSheetSuccess(test.data, courseId))
        //console.log(test.data)
    } catch (error) {
       // yield put(fetchTestSheetFailure(error))
    }
}

export function* fetchTestSheetStart(){
    yield takeLatest(testSheetTypes.FETCH_SUBMITTED_TEST_START, fetchTestStartAsync)
}

export function* testSheetSagas(){
    yield all([call(fetchTestSheetStart)])
}