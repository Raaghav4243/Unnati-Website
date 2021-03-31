import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { selectCurrentUserId } from '../user/user.selectors';

import {
  fetchEnrolledCoursesSuccess,
  fetchEnrolledCoursesFailure,
} from './student.actions';

import StudentActionTypes from './student.types';

export function* fetchEnrolledCoursesAsync() {
  try {
    const userId = yield select(selectCurrentUserId);
    let enrolledCoursesDetails = yield fetch(`/api/enrolled-courses/${userId}`);

    enrolledCoursesDetails = yield enrolledCoursesDetails.json();

    // console.log('enrolledCoursesDetails are ', enrolledCoursesDetails);

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
