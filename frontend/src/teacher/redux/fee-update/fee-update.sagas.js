import { all, call, put, takeLatest } from 'redux-saga/effects';
import { feeUpdateSuccess, feeUpdateFailure } from './fee-update.actions';
import { FeeUpdateTypes } from './fee-update.types';

export function* feeUpdateStartAsync({ payload: { userId, data } }) {
  try {
    yield fetch(`/api/user/${userId}/feesUpdate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());

    yield put(feeUpdateSuccess('Fees updated!'));
  } catch (error) {
    yield put(feeUpdateFailure(error));
  }
}

export function* feeUpdateStart() {
  yield takeLatest(FeeUpdateTypes.FEE_UPDATE_START, feeUpdateStartAsync);
}

export function* feeUpdateSagas() {
  yield all([call(feeUpdateStart)]);
}
