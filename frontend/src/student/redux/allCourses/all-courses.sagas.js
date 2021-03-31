import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  fetchAllCoursesSuccess,
  fetchAllCoursesFailure,
  fetchAllCafesSuccess,
  fetchAllCafesFailure,
} from './all-courses.actions';

import AllCoursesActionTypes from './all-courses.types';

export function* fetchAllCoursesAsync() {
  try {
    //yield delay(3000);
    let allCourses = yield fetch(`/api/all-courses`);

    allCourses = yield allCourses.json();

    // console.log('allCourses are ', allCourses);

    allCourses.done
      ? yield put(fetchAllCoursesSuccess(allCourses.courses))
      : yield put(fetchAllCoursesFailure(allCourses.message));
  } catch (error) {
    yield put(fetchAllCoursesFailure(error));
  }
}

export function* fetchAllCafesAsync() {
  try {
    //yield delay(3000);
    let allCafes = yield fetch(`/api/cafe-list`);

    allCafes = yield allCafes.json();

    // console.log('allCafes are ', allCafes);

    allCafes.done
      ? yield put(fetchAllCafesSuccess(allCafes.cafes))
      : yield put(fetchAllCafesFailure(allCafes.message));
  } catch (error) {
    yield put(fetchAllCafesFailure(error));
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

export function* fetchAllCafesStart() {
  yield takeLatest(
    AllCoursesActionTypes.FETCH_ALL_CAFES_START,
    fetchAllCafesAsync
  );
}

export function* allCoursesSagas() {
  yield all([call(fetchAllCoursesStart), call(fetchAllCafesStart)]);
}
