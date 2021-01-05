import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  fetchAssignmentSuccess,
  fetchAssignmentFailure,
} from './assignment-page.actions';

import AssignmentPageActionTypes from './assignment-page.types';

export function* fetchAssignmentAsync({
  payload: { user_id, course_id, assignment_id },
}) {
  try {
    let courseAssignmentDetails = yield fetch(
      `/enrolled-course/${user_id}/course/${course_id}/assignment/${assignment_id}`
    );

    courseAssignmentDetails = yield courseAssignmentDetails.json();

    console.log('courseAssignmentDetails are ', courseAssignmentDetails);

    courseAssignmentDetails.done
      ? yield put(fetchAssignmentSuccess(courseAssignmentDetails))
      : yield put(fetchAssignmentFailure(courseAssignmentDetails.message));
  } catch (error) {
    yield put(fetchAssignmentFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* fetchAssignmentStart() {
  yield takeLatest(
    AssignmentPageActionTypes.FETCH_ASSIGNMENT_START,
    fetchAssignmentAsync
  );
}

export function* assignmentSagas() {
  yield all([call(fetchAssignmentStart)]);
}
