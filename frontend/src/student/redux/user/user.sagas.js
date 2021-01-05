import { all, call, put, takeLatest } from "redux-saga/effects";
import { updateUserSuccess } from "./user.actions";
import { UserActionTypes } from "./user.types";

export function* updateUserAsync({payload: {user_id, data}}){
    try {
      console.log('updated profile info data',data)
        yield fetch(`/updateUser/${user_id}`, {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data);
              })

        yield put (updateUserSuccess('user updated'))
    } catch (error) {
        
    }
}

export function* updateUserStart(){
    yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserAsync)
}

export function* userSagas(){
    yield all([call(updateUserStart)])
}