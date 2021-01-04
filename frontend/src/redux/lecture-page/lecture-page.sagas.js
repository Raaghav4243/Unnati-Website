import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  fetchLectureSuccess,
  fetchLectureFailure,
} from './lecture-page.actions';

import LecturePageActionTypes from './lecture-page.types';

export function* fetchLectureAsync({
  payload: { user_id, course_id, lecture_id },
}) {
  try {
    let courseLectureDetails = yield fetch(
      `/enrolled-course/${user_id}/course/${course_id}/lecture/${lecture_id}`
    );

    courseLectureDetails = yield courseLectureDetails.json();

    console.log('courseLectureDetails are ', courseLectureDetails);

    courseLectureDetails.done
      ? yield put(fetchLectureSuccess(courseLectureDetails))
      : yield put(fetchLectureFailure(courseLectureDetails.message));
  } catch (error) {
    yield put(fetchLectureFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* fetchLectureStart() {
  yield takeLatest(
    LecturePageActionTypes.FETCH_LECTURE_START,
    fetchLectureAsync
  );
}

export function* lectureSagas() {
  yield all([call(fetchLectureStart)]);
}
