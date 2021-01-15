import { connect } from 'react-redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  signInSuccess,
  signInFailure,
  // fetchUserFailure,
  // fetchUserSuccess,
  updateUserSuccess,
  signOutSuccess,
  signOutFailure,
} from './user.actions';
import { UserActionTypes } from './user.types';

export function* isUserAuthenticated() {
  try {
    console.log('USER ASYNC IS GETTING CALLED');
    // localStorage.removeItem('user');
    let token = yield localStorage.getItem('token');
    let userData = yield localStorage.getItem('user');
    // if (userData) {
    // }
    userData = JSON.parse(userData);
    // yield put(signInSuccess(userData));

    if (token && userData) {
      console.log('USER DATA FOUND!');
      console.log('USER DATA INSIDE SAGA IS', userData);
      // check if token is valid

      // if yes, then sign in the user
      yield put(signInSuccess(userData));
      // if no, then remove the token and the user from the local storage
    } else {
      console.log('USER DATA NOT FOUND!');
      yield localStorage.removeItem('token');
      yield localStorage.removeItem('user');
      yield put(
        signInFailure('FAILED TO SIGN IN AS TOKEN HAS EXPIRED OR DOESNOT EXIST')
      );
    }
  } catch (error) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    yield put(signInFailure(error));
  }
}

export function* signOutAsync() {
  try {
    console.log('SIGN OUT USER ASYNC IS GETTING CALLED');
    // localStorage.removeItem('user');
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    // userData = JSON.parse(userData);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* updateUserAsync({ payload: { user_id, data } }) {
  try {
    // console.log('updated profile info data', data);
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
    if (UserObj.done) {
      localStorage.setItem('token', UserObj.token);
      localStorage.setItem('user', JSON.stringify(UserObj.user));
      yield put(signInSuccess(UserObj.user));
    } else {
      yield put(signInFailure(UserObj.message));
    }
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* updateUserStart() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserAsync);
}

export function* userSagas() {
  yield all([
    call(updateUserStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
