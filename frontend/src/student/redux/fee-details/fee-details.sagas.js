import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchFeeAmountStart } from "../fee-amount/fee-amount.actions";
import FeeDetailTypes from "./fee-details.types";
import {
  fetchFeeDetailFailure,
  fetchFeeDetailSuccess,
} from "./fee-details.actions";

export function* FetchFeeDetailAsync({ payload: { user_id } }) {
  try {
    let feeDetail = yield fetch(`/user-receipts/${user_id}`, {
      method: "GET", // or 'PUT'
      headers: {
        "content-type": "application/json",
      },
    });
    feeDetail = yield feeDetail.json();
    console.log("fee details are", feeDetail.userReceipts);

    yield put(fetchFeeDetailSuccess(feeDetail.userReceipts));
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
