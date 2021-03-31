import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { fetchUserCafeSuccess, fetchUserCafeFailure } from './cafe.actions';

import { selectCurrentUserCafeId } from '../user/user.selectors';

import CafeActionTypes from './cafe.types';

export function* fetchCafeAsync() {
  try {
    const cafe_id = yield select(selectCurrentUserCafeId);
    let cafeDetails = yield fetch(`/api/cafeinformation/${cafe_id}`);
    cafeDetails = yield cafeDetails.json();
    cafeDetails.done
      ? yield put(fetchUserCafeSuccess(cafeDetails))
      : yield put(fetchUserCafeFailure(cafeDetails.message));
  } catch (error) {
    yield put(fetchUserCafeFailure(error));
  }
}

export function* fetchCafeStart() {
  yield takeLatest(CafeActionTypes.FETCH_CAFE_START, fetchCafeAsync);
}

export function* cafeSagas() {
  yield all([call(fetchCafeStart)]);
}
