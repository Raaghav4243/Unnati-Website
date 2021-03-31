import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { selectUserCafeId } from '../cafe/cafe.selectors';
import {
  fetchVerifiedStudentFailure,
  fetchVerifiedStudentSuccess,
} from './verified-students.actions';
import { VerifiedStudentsType } from './verified-students.types';

export function* fetchVerifiedStudentAsync() {
  try {
    const cafe_id = yield select(selectUserCafeId);
    let student = yield fetch(`/api/verified-students/${cafe_id}`);
    student = yield student.json();

    student.done
      ? yield put(fetchVerifiedStudentSuccess(student))
      : yield put(fetchVerifiedStudentFailure(student.message));
  } catch (error) {
    yield put(fetchVerifiedStudentFailure(error));
  }
}

export function* fetchVerifiedStudentStart() {
  yield takeLatest(
    VerifiedStudentsType.FETCH_VERIFIED_STUDENT_START,
    fetchVerifiedStudentAsync
  );
}

export function* verifiedStudentsSagas() {
  yield all([call(fetchVerifiedStudentStart)]);
}
