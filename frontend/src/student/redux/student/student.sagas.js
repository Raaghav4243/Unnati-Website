import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  fetchEnrolledCoursesSuccess,
  fetchEnrolledCoursesFailure,
} from './student.actions';

import StudentActionTypes from './student.types';

export function* fetchEnrolledCoursesAsync({ payload: { user_id } }) {
  try {
    let enrolledCoursesDetails = yield fetch(`/enrolled-courses/${user_id}`);

    enrolledCoursesDetails = yield enrolledCoursesDetails.json();

    console.log('enrolledCoursesDetails are ', enrolledCoursesDetails);

    enrolledCoursesDetails.done
      ? yield put(fetchEnrolledCoursesSuccess(enrolledCoursesDetails))
      : yield put(fetchEnrolledCoursesFailure(enrolledCoursesDetails.message));
  } catch (error) {
    yield put(fetchEnrolledCoursesFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* fetchEnrolledCoursesStart() {
  yield takeLatest(
    StudentActionTypes.FETCH_ENROLLED_COURSES_START,
    fetchEnrolledCoursesAsync
  );
}

export function* studentSagas() {
  yield all([call(fetchEnrolledCoursesStart)]);
}
