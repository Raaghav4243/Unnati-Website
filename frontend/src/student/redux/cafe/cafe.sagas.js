import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { fetchUserCafeSuccess, fetchUserCafeFailure } from './cafe.actions';

import { selectCurrentUserCafeId } from '../user/user.selectors';

import CafeActionTypes from './cafe.types';

export function* fetchCafeAsync() {
  try {
    console.log('CAFE ASYNC STARTED!');
    const cafe_id = yield select(selectCurrentUserCafeId);
    console.log('CAFE ID RECEIVED', cafe_id);
    let cafeDetails = yield fetch(`/cafeinformation/${cafe_id}`);

    cafeDetails = yield cafeDetails.json();

    console.log('cafeDetails are ', cafeDetails);

    cafeDetails.done
      ? yield put(fetchUserCafeSuccess(cafeDetails))
      : yield put(fetchUserCafeFailure(cafeDetails.message));
  } catch (error) {
    yield put(fetchUserCafeFailure(error));
  }
}

// export function* fetchTestOnCurrentCourseContentTypeChange() {
//   yield takeLatest(StudentActionTypes.SET_CURRENT_COURSE_TOPIC_CONTENT);
// }

export function* fetchCafeStart() {
  yield takeLatest(CafeActionTypes.FETCH_CAFE_START, fetchCafeAsync);
}

export function* cafeSagas() {
  yield all([call(fetchCafeStart)]);
}