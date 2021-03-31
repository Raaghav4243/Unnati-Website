import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { selectUserCafeId } from '../cafe/cafe.selectors';
import {
  approveStudentFailure,
  approveStudentSuccess,
  fetchUnVerifiedStudentFailure,
  fetchUnVerifiedStudentSuccess,
} from './unverified-students.actions';
import { UnVerifiedStudentsType } from './unverified-students.types';

export function* fetchUnVerifiedStudentAsync() {
  try {
    const cafe_id = yield select(selectUserCafeId);
    let student = yield fetch(`/api/unverified-students/${cafe_id}`);
    student = yield student.json();

    student.done
      ? yield put(fetchUnVerifiedStudentSuccess(student))
      : yield put(fetchUnVerifiedStudentFailure(student.message));
  } catch (error) {
    yield put(fetchUnVerifiedStudentFailure(error));
  }
}

export function* approveStudentStartAsync({ payload: { studentId } }) {
  try {
    yield fetch(`/api/studentApproval/${studentId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());

    yield put(approveStudentSuccess('student approved'));
  } catch (error) {
    yield put(approveStudentFailure(error));
  }
}

export function* fetchUnVerifiedStudentStart() {
  yield takeLatest(
    UnVerifiedStudentsType.FETCH_UNVERIFIED_STUDENT_START,
    fetchUnVerifiedStudentAsync
  );
}

export function* approveStudentStart() {
  yield takeEvery(
    UnVerifiedStudentsType.APPROVE_STUDENT_START,
    approveStudentStartAsync
  );
}

export function* unverifiedStudentsSagas() {
  yield all([call(fetchUnVerifiedStudentStart), call(approveStudentStart)]);
}
