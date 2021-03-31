import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import FeeDetailTypes from './fee-details.types';
import {
  fetchFeeDetailFailure,
  fetchFeeDetailSuccess,
} from './fee-details.actions';
import { selectCurrentUserId } from '../user/user.selectors';

export function* FetchFeeDetailAsync() {
  try {
    const userId = yield select(selectCurrentUserId);

    let feeTransactionDetails = yield fetch(`/api/user-receipts/${userId}`);

    feeTransactionDetails = yield feeTransactionDetails.json();

    feeTransactionDetails.done
      ? yield put(fetchFeeDetailSuccess(feeTransactionDetails.userReceipts))
      : yield put(fetchFeeDetailFailure(feeTransactionDetails.message));
  } catch (error) {
    yield put(fetchFeeDetailFailure(error));
  }
}

export function* fetchFeeDetailStart() {
  yield takeLatest(FeeDetailTypes.FETCH_FEE_DETAILS_START, FetchFeeDetailAsync);
}

export function* feeDetailSagas() {
  yield all([call(fetchFeeDetailStart)]);
}
