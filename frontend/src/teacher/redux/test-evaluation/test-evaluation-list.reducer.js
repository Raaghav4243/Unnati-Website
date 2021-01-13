import { TestEvaluationType } from "./test-evaluation-list.types"

const INTIAL_STATE = {
    pendingEvaluation: null,
    isFetching: false,
    errorMessage: null,
    isUpdating: false,
    updateConformation: null
}

const testEvaluationListReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){
        case TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_START:
            return{
                ...state,
                isFetching: true 
            }
        case TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_SUCCESS:
            return{
                ...state,
                isFetching: false,
                pendingEvaluation: action.payload
            }
        case TestEvaluationType.FETCH_TEST_LIST_FOR_EVALUATION_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case TestEvaluationType.SUBMIT_TEST_SCORE_START:
            return{
                ...state,
                isFetching: true
            }
        case TestEvaluationType.SUBMIT_TEST_SCORE_SUCCESS:
            return{
                ...state, 
                isFetching: false,
                updateConformation: action.payload
            }
        case TestEvaluationType.SUBMIT_TEST_SCORE_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return{...state}
    }
}

export default testEvaluationListReducer
