import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchFeeAmountFailure, fetchFeeAmountSuccess } from "./fee-amount.actions";

import FeeAmountTypes from "./fee-amount.types";

export function* fetchFeeAmountAsync(){
    try {
        let feeAmountDetails = yield fetch(
            '/FeesStatus/5fa6af42769f165e982b2ea9/cafe/5fa5796e9542c50df4285b04'
        )

        feeAmountDetails = yield feeAmountDetails.json();
        feeAmountDetails = feeAmountDetails
        console.log('fee amount', feeAmountDetails)

        feeAmountDetails.done
        ? yield put(fetchFeeAmountSuccess(feeAmountDetails.user))
        : yield put(fetchFeeAmountFailure(feeAmountDetails.message))

    } catch (error) {
        yield put(fetchFeeAmountFailure(error))
    }
}

export function* fetchFeeAmountStart(){
    yield takeLatest(FeeAmountTypes.FETCH_FEE_AMOUNT_START, fetchFeeAmountAsync)
}

export function* feeAmountSagas(){
    yield all([call(fetchFeeAmountStart)])
}