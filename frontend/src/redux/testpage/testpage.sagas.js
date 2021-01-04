import { takeLatest, put, all, call } from 'redux-saga/effects';

import { fetchTestSuccess, fetchTestFailure } from './testpage.actions';

import TestPageActionTypes from './testpage.types';
import StudentActionTypes from '../student/student.types';

export function* fetchTestAsync({ payload: { user_id, course_id, test_id } }) {
  try {
    let courseTestDetails = yield fetch(
      `/enrolled-course/${user_id}/course/${course_id}/test/${test_id}`
    );

    courseTestDetails = yield courseTestDetails.json();

    console.log('courseTestDetails are ', courseTestDetails);

    courseTestDetails.done
      ? yield put(fetchTestSuccess(courseTestDetails))
      : yield put(fetchTestFailure(courseTestDetails.message));
  } catch (error) {
    yield put(fetchTestFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* fetchTestStart() {
  yield takeLatest(TestPageActionTypes.FETCH_TEST_START, fetchTestAsync);
}

export function* testSagas() {
  yield all([call(fetchTestStart)]);
}
