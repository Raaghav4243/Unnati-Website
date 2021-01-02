import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  fetchCourseTopicsSuccess,
  fetchCourseTopicsFailure,
} from './course-topic.actions';

import CourseTopicActionTypes from './course-topic.types';

export function* fetchCourseTopicsAsync({ payload: { user_id, course_id } }) {
  try {
    let CourseTopicsAndCompletionDetails = yield fetch(
      `/enrolled-course/${user_id}/course/${course_id}`
    );

    CourseTopicsAndCompletionDetails = yield CourseTopicsAndCompletionDetails.json();

    console.log(
      'CourseTopicsAndCompletionDetails are ',
      CourseTopicsAndCompletionDetails
    );

    CourseTopicsAndCompletionDetails.done
      ? yield put(fetchCourseTopicsSuccess(CourseTopicsAndCompletionDetails))
      : yield put(fetchCourseTopicsFailure('Backend call failed'));
  } catch (error) {
    yield put(fetchCourseTopicsFailure(error));
  }
}

export function* fetchCourseTopicsStart() {
  yield takeLatest(
    CourseTopicActionTypes.FETCH_COURSE_TOPICS_START,
    fetchCourseTopicsAsync
  );
}

export function* courseTopicSagas() {
  yield all([call(fetchCourseTopicsStart)]);
}
