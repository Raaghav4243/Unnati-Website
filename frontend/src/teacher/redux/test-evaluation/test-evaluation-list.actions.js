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

export const updateTestScoreStart = (studentId, courseId, testId, data) => {
        return{
            type: TestEvaluationType.SUBMIT_TEST_SCORE_START,
            payload: {studentId, courseId, testId, data}
        }
}

export const updateTestScoreSuccess = (message) => {
    return{
        type: TestEvaluationType.SUBMIT_TEST_SCORE_SUCCESS,
        payload: message
    }
}

export const updateTestScoreFailure = (error) => {
    return{
        type: TestEvaluationType.SUBMIT_TEST_SCORE_FAILURE,
        payload: error
    }
}