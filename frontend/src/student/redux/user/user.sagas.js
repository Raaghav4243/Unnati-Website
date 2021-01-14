import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  signInSuccess,
  signInFailure,
  fetchUserFailure,
  fetchUserSuccess,
  updateUserSuccess,
  signOutSuccess,
  signOutFailure,
} from './user.actions';
import { UserActionTypes } from './user.types';

export function* fetchUserAsync() {
  try {
    console.log('USER ASYNC IS GETTING CALLED');
    // localStorage.removeItem('user');
    let userData = yield localStorage.getItem('user');
    userData = JSON.parse(userData);
    console.log('USER DATA INSIDE SAGA IS', userData);
    yield put(signInSuccess(userData));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* signOutAsync() {
  try {
    console.log('SIGN OUT USER ASYNC IS GETTING CALLED');
    // localStorage.removeItem('user');
    let userData = yield localStorage.removeItem('user');
    userData = JSON.parse(userData);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* updateUserAsync({ payload: { user_id, data } }) {
  try {
    console.log('updated profile info data', data);
    yield fetch(`/updateUser/${user_id}`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      });

    yield put(updateUserSuccess('User updated!'));
  } catch (error) {}
}

export function* signInWithEmail({ payload }) {
  console.log('DATA BEFORE POST REQUEST IS', payload);
  let data = payload;
  try {
    let UserObj = yield fetch('/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    UserObj = yield UserObj.json();
    console.log('USER OBJ IS', UserObj);
    localStorage.setItem('token', UserObj.token);
    localStorage.setItem('user', JSON.stringify(UserObj.user));
    yield put(signInSuccess(UserObj.user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* updateUserStart() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserAsync);
}

export function* fetchUserStart() {
  yield takeLatest(UserActionTypes.FETCH_USER_START, fetchUserAsync);
}

export function* userSagas() {
  yield all([
    call(updateUserStart),
    call(fetchUserAsync),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
