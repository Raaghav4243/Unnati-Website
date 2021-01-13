import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { approveStudentFailure, approveStudentSuccess, fetchUnVerifiedStudentFailure, fetchUnVerifiedStudentSuccess } from './unverified-students.actions';
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

export function* approveStudentStartAsync({payload: {studentId}}){
    try {
        yield fetch(
            `/studentApproval/${studentId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log("student approved", data);
            });

        yield put(approveStudentSuccess('student approved'))
    } catch (error) {
        yield put(approveStudentFailure(error))
    }
}

export function* fetchUnVerifiedStudentStart(){
    yield takeLatest(UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START, fetchUnVerifiedStudentAsync)
}

export function* approveStudentStart(){
    yield takeEvery(UnVerifiedStudentsType.APPROVE_STUDENT_START, approveStudentStartAsync)
}

export function* unverifiedStudentsSagas(){
    yield all([call(fetchUnVerifiedStudentStart), call(approveStudentStart)])
}