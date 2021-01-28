import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {
  selectCurrentUserCafeId,
  selectCurrentUserId,
} from '../user/user.selectors';
import {
  fetchFeeAmountFailure,
  fetchFeeAmountSuccess,
} from './fee-amount.actions';

import FeeAmountTypes from './fee-amount.types';

export function* fetchFeeAmountAsync() {
  try {
    console.log('FEE AMOUNT SAGA IS GETTING CALLED');
    const userId = yield select(selectCurrentUserId);
    // const cafeId = yield select(selectCurrentUserCafeId);
    // let feeAmountDetails = yield fetch(`/FeesStatus/${userId}/cafe/${cafeId}`, {
    //   method: 'GET', // or 'PUT'
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // });

    let feeAmountDetails = yield fetch(`/FeesStatus/user/${userId}`);

    feeAmountDetails = yield feeAmountDetails.json();

    console.log('feeAmountDetails are ', feeAmountDetails);

    feeAmountDetails.done
      ? yield put(fetchFeeAmountSuccess(feeAmountDetails.user))
      : yield put(fetchFeeAmountFailure(feeAmountDetails.message));
  } catch (error) {
    yield put(fetchFeeAmountFailure(error));
  }
}

export function* fetchFeeAmountStart() {
  yield takeLatest(FeeAmountTypes.FETCH_FEE_AMOUNT_START, fetchFeeAmountAsync);
}

export function* feeAmountSagas() {
  yield all([call(fetchFeeAmountStart)]);
}
