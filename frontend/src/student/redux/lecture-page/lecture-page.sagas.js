import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
} from '../student/student.selectors';
import { selectCurrentUserId } from '../user/user.selectors';

import {
  fetchLectureSuccess,
  fetchLectureFailure,
} from './lecture-page.actions';

import LecturePageActionTypes from './lecture-page.types';

export function* fetchLectureAsync() {
  try {
    const userId = yield select(selectCurrentUserId);
    const courseId = yield select(selectCurrentCourseId);
    const lectureId = yield select(selectCurrentCourseTopicId);
    // console.log(
    //   'FETCHING LECTURE USING',
    //   userId,
    //   'user',
    //   courseId,
    //   'course',
    //   lectureId,
    //   'lecture'
    // );
    let courseLectureDetails = yield fetch(
      `/api/enrolled-course/${userId}/course/${courseId}/lecture/${lectureId}`
    );

    courseLectureDetails = yield courseLectureDetails.json();

    // console.log('courseLectureDetails are ', courseLectureDetails);

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
