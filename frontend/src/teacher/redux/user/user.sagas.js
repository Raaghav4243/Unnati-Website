import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  signInSuccess,
  signInFailure,
  // fetchUserFailure,
  // fetchUserSuccess,
  updateUserSuccess,
  updateUserFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  userSessionExpired,
  checkUserSession,
} from './user.actions';
import { UserActionTypes } from './user.types';

export function* isUserAuthenticated() {
  try {
    // console.log('USER ASYNC IS GETTING CALLED');
    // localStorage.removeItem('user');
    let token = yield localStorage.getItem('token');
    let userData = yield localStorage.getItem('user');
    // if (userData) {
    // }
    userData = JSON.parse(userData);
    // yield put(signInSuccess(userData));

    if (token && userData) {
      // console.log('USER DATA FOUND!');
      // console.log('USER DATA INSIDE SAGA IS', userData);
      // check if token is valid

      // if yes, then sign in the user
      yield put(signInSuccess(userData));
      // if no, then remove the token and the user from the local storage
    } else {
      // console.log('USER DATA NOT FOUND!');
      yield localStorage.removeItem('token');
      yield localStorage.removeItem('user');
      yield put(userSessionExpired());
    }
  } catch (error) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    yield put(userSessionExpired());
  }
}

export function* signOutAsync() {
  try {
    // console.log('SIGN OUT USER ASYNC IS GETTING CALLED');
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
    let UserUpdation = yield fetch(`/api/updateUser/${user_id}`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    UserUpdation = yield UserUpdation.json();
    // console.log('User Updation IS', UserUpdation);
    if (UserUpdation.done) {
      // update local storage
      let userData = yield localStorage.getItem('user');

      userData = JSON.parse(userData);
      // console.log('NEW DATA IS', data);
      // console.log('CURRENT USER DATA IN LOCAL STORAGE IS', userData);

      userData = {
        ...userData,
        ...data,
      };

      // console.log('UPDATED USER DATA IN LOCAL STORAGE IS', userData);
      localStorage.setItem('user', JSON.stringify(userData));

      yield put(updateUserSuccess('User updated!'));
    } else {
      yield put(updateUserFailure(UserUpdation.message));
    }
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

export function* signInWithEmail({ payload }) {
  // console.log('DATA BEFORE POST REQUEST IS', payload);
  let data = payload;
  try {
    let UserObj = yield fetch('/api/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    UserObj = yield UserObj.json();
    // console.log('USER OBJ IS', UserObj);
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

export function* signUp({ payload }) {
  // console.log('DATA BEFORE POST REQUEST IS', payload);
  let data = payload;
  try {
    let UserObj = yield fetch('/api/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    UserObj = yield UserObj.json();
    // console.log('USER OBJ IS', UserObj);
    if (UserObj.done) {
      yield put(signUpSuccess());
    } else {
      yield put(signUpFailure(UserObj.error));
    }
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* onUpdateUserStart() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserAsync);
}

export function* onUpdateUserSuccess() {
  yield takeLatest(UserActionTypes.UPDATE_USER_SUCCESS, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onUpdateUserStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onCheckUserSession),
    call(onUpdateUserSuccess),
  ]);
}
