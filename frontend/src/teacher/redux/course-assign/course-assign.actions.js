import { CourseAssignTypes } from "./course-assign.types"

export const courseAssignStart = (userId, cafeId, courseId) => {
    return{
        type: CourseAssignTypes.ASSIGN_COURSE_START,
        payload: {userId: userId, cafeId: cafeId, courseId: courseId}
    }
}

export const courseAssignSuccess = (message) => {
    return{
        type: CourseAssignTypes.ASSIGN_COURSE_SUCCESS,
        payload: message
    }
}

export const courseAssignFailure = (error) => {
    return{
        type: CourseAssignTypes.ASSIGN_COURSE_FAILURE,
        payload: error
    }
}

