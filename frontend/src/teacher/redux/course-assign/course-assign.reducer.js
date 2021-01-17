import { CourseAssignTypes } from "./course-assign.types"

const INITIAL_STATE = {
    isUpdating: false,
    errorMessage: null,
    updateConfirmation: null
}

const courseAssignReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case CourseAssignTypes.ASSIGN_COURSE_START:
            return{
                ...state, 
                isUpdating: true
            }
        case CourseAssignTypes.ASSIGN_COURSE_SUCCESS:
            return{
                ...state,
                isUpdating: false,
                updateConfirmation: action.payload
            }
        case CourseAssignTypes.ASSIGN_COURSE_FAILURE:
            return{
                state,
                isUpdating: false,
                errorMessage: action.payload
            }
        default: 
            return{...state}
    }
}

export default courseAssignReducer
