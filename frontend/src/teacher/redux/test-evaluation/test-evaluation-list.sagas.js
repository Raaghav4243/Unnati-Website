import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTestListForEvaluationFailure, fetchTestListForEvaluationSuccess } from "./test-evaluation-list.actions";
import { TestEvaluationType } from "./test-evaluation-list.types";

export function* fetchTestListAsync(){
    try {
        let testList = yield fetch('loadPendingEvaluations/5fa5796e9542c50df4285b04')
        testList = yield testList.json()
        console.log('testlist is', testList)
        
         yield put(fetchTestListForEvaluationSuccess(testList.pendingEvaluations))
        
    } catch (error) {
        yield put(fetchTestListForEvaluationFailure(error))
    }
}

export function* fetchTestListForEvaluationStart(){
    yield takeLatest(TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_START, fetchTestListAsync)
}

export function* testListForEvaluationSagas(){
    yield all([call(fetchTestListForEvaluationStart)])
}