const { UnVerifiedStudentsType } = require("./unverified-students.types")

const INITIAL_STATE = {
    unverifiedStudents: null,
    isFetching: false,
    errorMessage: null,
    isApproving: false,
    approveConfirmation: null
}

const unverifiedStudentReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START:
            return{
                ...state,
                isFetching: true
            };
        case UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_SUCCESS:
            const {arr} = action.payload
            return{
                ...state,
                unverifiedStudents: arr,
                isFetching: false
            }
        case UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case UnVerifiedStudentsType.APPROVE_STUDENT_START:
            return{
                ...state,
                isApproving: true,
            }
        case UnVerifiedStudentsType.APPROVE_STUDENT_SUCCESS:
            return{
                ...state,
                isApproving: false,
                approveConfirmation: action.payload
            }
        case UnVerifiedStudentsType.APPROVE_STUDENT_FAILURE:
            return{
                ...state,
                errorMessage: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default unverifiedStudentReducer

