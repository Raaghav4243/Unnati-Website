import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUnVerifiedStudentFailure, fetchUnVerifiedStudentSuccess } from '../unverified-students/unverified-students.actions';
import { UnVerifiedStudentsType } from "./unverified-students.types";

export function* fetchUnVerifiedStudentAsync(){
    try {
        console.log('unverified student async started')
        let student = yield fetch('/unverified-students/5fa5796e9542c50df4285b04')
        student = yield student.json()
        console.log('unverified student are', student)

        student.done
        ? yield put(fetchUnVerifiedStudentSuccess(student))
        : yield put(fetchUnVerifiedStudentFailure(student.message)) 
    } catch (error) {
        yield put(fetchUnVerifiedStudentFailure(error))
    }
}

export function* fetchUnVerifiedStudentStart(){
    yield takeLatest(UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START, fetchUnVerifiedStudentAsync)
}

export function* unverifiedStudentsSagas(){
    yield all([call(fetchUnVerifiedStudentStart)])
}