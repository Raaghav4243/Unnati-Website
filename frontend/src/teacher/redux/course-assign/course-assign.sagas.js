import { all, call, put, takeLatest } from "redux-saga/effects";
import { courseAssignFailure, courseAssignSuccess } from "./course-assign.actions";
import { CourseAssignTypes } from "./course-assign.types";

export function* courseAssignAsync({payload: {
    userId, cafeId, courseId
}}){
    try {
        console.log('saga data', userId, cafeId, courseId)

        yield fetch(`/user/${userId}/cafe/${cafeId}/courseEnroll/${courseId}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("course assigned", data)
            })
        
        yield put(courseAssignSuccess('course assigned to student'))

    } catch (error) {
        yield put(courseAssignFailure(error))
    }
}

export function* courseAssignStart(){
    yield takeLatest(CourseAssignTypes.ASSIGN_COURSE_START, courseAssignAsync)
}

export function* courseAssignSagas(){
    yield all([call(courseAssignStart)])
}