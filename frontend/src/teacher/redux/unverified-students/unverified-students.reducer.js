const { VerifiedStudentsType } = require("./verified-students.types")

const INITIAL_STATE = {
    unverifiedStudents: null,
    isFetching: false,
    errorMessage: null,
}

const UnverifiedStudentReducer = (state=INITIAL_STATE, action) => {
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
        default:
            return{
                ...state
            }
    }
}

export default unverifiedStudentReducer

