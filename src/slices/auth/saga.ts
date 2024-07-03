import { PayloadAction } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'redux-first-history';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { login, getMe, register, token, changePasswordUser, sendMailForgot, logout } from 'apis';

import { STORAGE } from 'utils/storage';
import { RootState } from 'types';

import { notifActions } from 'slices/notification';
import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';

export function* loginSaga({ payload }: PayloadAction<{ email: string; password: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(login, payload);
    localStorage.setItem(STORAGE.USER_TOKEN, response.data.jwt);
    const {
      broadcast: { boardcastChannel },
    }: RootState = yield select();
    if (boardcastChannel) {
      boardcastChannel.postMessage('LOGIN');
    }
    yield put(actions.loginSuccess());
    yield put(
      notifActions.setNotif({
        type: 'success',
        message: 'Login Success',
        description: response.meta.message,
      }),
    );
    yield put(actions.getMe());
  });
}

export function* registerSaga({ payload }: PayloadAction<{ email: string; password: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(register, payload);
    const {
      broadcast: { boardcastChannel },
    }: RootState = yield select();
    if (boardcastChannel) {
      boardcastChannel.postMessage('REGISTER');
    }
    yield put(actions.registerSuccess({ data: response.data, email: payload.email }));

    yield put(actions.updateStep());
    yield put(actions.setVerifyEmail(response.data));
  });
}

export function* tokenSaga({ payload }: PayloadAction<{ data: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(token, payload);
    yield put(actions.sendVerifyEmailSuccess(response.data));
    yield put(
      notifActions.setNotif({
        type: 'success',
        message: 'Register Success',
        description: response.meta.message,
      }),
    );
  });
}
export function* changePasswords({
  payload,
}: PayloadAction<{ old_password?: string; new_password: string; token?: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(changePasswordUser, payload);
    if (response.meta.status) {
      yield put(actions.changePasswordSuccess());
      yield put(
        notifActions.setNotif({
          type: 'success',
          message: 'Change password Success',
          description: response.meta.message,
        }),
      );
    }
  });
}

export function* sendMail({ payload }: PayloadAction<{ email: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(sendMailForgot, payload);
    if (response.meta.status) {
      yield put(actions.sendMailSuccess());
      yield put(
        notifActions.setNotif({
          type: 'success',
          message: 'Send mail Success',
          description: response.meta.message,
        }),
      );
    }
  });
}
export function* getMeSaga() {
  yield sagaCustomize(function* () {
    const response = yield call(getMe);
    yield put(actions.getMeSuccess(response.data));
  });
}

export function* logoutSaga() {
  yield sagaCustomize(function* () {
    const response = yield call(logout);
    yield put(actions.logoutSuccess(response.data));
    localStorage.removeItem(STORAGE.USER_TOKEN);
  });
}

export function* locationChangeSaga() {}

export function* saga() {
  yield takeLatest(actions.login.type, loginSaga);
  yield takeLatest(actions.register.type, registerSaga);
  yield takeLatest(actions.sendVerifyEmail.type, tokenSaga);
  yield takeLatest(actions.getMe.type, getMeSaga);
  yield takeLatest(actions.logout.type, logoutSaga);
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
  yield takeLatest(actions.changePassword.type, changePasswords);
  yield takeLatest(actions.sendMail.type, sendMail);
}
