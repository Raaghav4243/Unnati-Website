const { VerifiedStudentsType } = require("./verified-students.types")

const INITIAL_STATE = {
    verifiedStudents: {
        _id: null,
        email: null,
        firstname: null,
        lastName: null,
        phoneNumer: null
    },
    isFetching: false,
    errorMessage: null,
}

const verifiedStudentReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case VerifiedStudentsType.FETCH_VERIFIED_STUDENT_START:
            return{
                ...state,
                isFetching: true
            };
        case VerifiedStudentsType.FETCH_VERIFIED_STUDENT_SUCCESS:
            const {arr} = action.payload
            return{
                ...state,
                verifiedStudents: arr,
                isFetching: false
            }
        case VerifiedStudentsType.FETCH_VERIFIED_STUDENT_FAILURE:
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

export default verifiedStudentReducer

