import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchFeeAmountFailure, fetchFeeAmountSuccess } from "./fee-amount.actions";

import FeeAmountTypes from "./fee-amount.types";

export function* fetchFeeAmountAsync({payload: {user_id, cafe_id}}){
    try {
        let feeAmountDetails = yield fetch(
            `/FeesStatus/${user_id}/cafe/${cafe_id}`
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