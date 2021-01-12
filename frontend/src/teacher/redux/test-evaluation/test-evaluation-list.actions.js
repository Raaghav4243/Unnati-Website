import { TestEvaluationType } from "./test-evaluation-list.types"

export const fetchTestListForEvaluationStart = () => {
    return{
        type: TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_START
    }
}

export const fetchTestListForEvaluationSuccess = (testEvaluationList) => {
    return{
        type: TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_SUCCESS,
        payload: testEvaluationList
    }
}

export const fetchTestListForEvaluationFailure = (message) => {
    return{
        type: TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_FAILURE,
        payload: message
    }
}