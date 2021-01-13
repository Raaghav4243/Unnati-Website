import { all, call, put, takeLatest } from "redux-saga/effects";
import { feeUpdateSuccess, feeUpdateFailure } from "./fee-update.actions";
import { FeeUpdateTypes } from "./fee-update.types";

export function* feeUpdateStartAsync({payload: {userId, data}}){
    try {
        console.log('saga data', userId, data)
        yield fetch(`/user/${userId}/feesUpdate`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('fees updated', data)
            })

        yield put(feeUpdateSuccess('fees updated'))
    } catch (error) {
        yield put(feeUpdateFailure(error))
    }
}

export function* feeUpdateStart(){
    yield takeLatest(FeeUpdateTypes.FEE_UPDATE_START, feeUpdateStartAsync)
}

export function* feeUpdateSagas(){
    yield all([call(feeUpdateStart)])
}