import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import {
  fetchAllCoursesSuccess,
  fetchAllCoursesFailure,
} from './all-courses.actions';

import AllCoursesActionTypes from './all-courses.types';

export function* fetchAllCoursesAsync() {
  try {
    yield delay(3000);
    let allCourses = yield fetch(`/all-courses`);

    allCourses = yield allCourses.json();

    console.log('allCourses are ', allCourses);

    allCourses.done
      ? yield put(fetchAllCoursesSuccess(allCourses.courses))
      : yield put(fetchAllCoursesFailure(allCourses.message));
  } catch (error) {
    yield put(fetchAllCoursesFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* fetchAllCoursesStart() {
  yield takeLatest(
    AllCoursesActionTypes.FETCH_ALL_COURSES_START,
    fetchAllCoursesAsync
  );
}

export function* allCoursesSagas() {
  yield all([call(fetchAllCoursesStart)]);
}
