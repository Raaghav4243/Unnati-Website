import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchFeeAmountStart } from '../fee-amount/fee-amount.actions';
import FeeDetailTypes from './fee-details.types';
import {
  fetchFeeDetailFailure,
  fetchFeeDetailSuccess,
} from './fee-details.actions';

export function* FetchFeeDetailAsync() {
  try {
    let feeDetail = yield fetch('/user-receipts/5fa6af42769f165e982b2ea9');
    feeDetail = yield feeDetail.json();
    console.log('fee details are', feeDetail);

    feeDetail.done
      ? yield put(fetchFeeDetailSuccess(feeDetail.userReceipts))
      : yield put(fetchFeeDetailFailure(feeDetail.message));
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
