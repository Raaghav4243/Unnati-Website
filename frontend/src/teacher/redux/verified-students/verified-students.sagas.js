import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchVerifiedStudentFailure, fetchVerifiedStudentSuccess } from "./verified-students.actions";
import { VerifiedStudentsType } from "./verified-students.types";

export function* fetchVerifiedStudentAsync(){
    try {
        console.log('verified student async started')
        let student = yield fetch('/verified-students/5fa5796e9542c50df4285b04')
        student = yield student.json()
        console.log('verified student are', student)

        student.done
        ? yield put(fetchVerifiedStudentSuccess(student))
        : yield put(fetchVerifiedStudentFailure(student.message)) 
    } catch (error) {
        yield put(fetchVerifiedStudentFailure(error))
    }
}

export function* fetchVerifiedStudentStart(){
    yield takeLatest(VerifiedStudentsType.FETCH_VERIFIED_STUDENT_START, fetchVerifiedStudentAsync)
}

export function* verifiedStudentsSagas(){
    yield all([call(fetchVerifiedStudentStart)])
}