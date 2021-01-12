import { TestEvaluationType } from "./test-evaluation-list.types"

const INTIAL_STATE = {
    pendingEvaluation: null,
    isFetching: false,
    errorMessage: null
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
        default:
            return{...state}
    }
}

export default testEvaluationListReducer
