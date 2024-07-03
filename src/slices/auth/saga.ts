import { PayloadAction } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'redux-first-history';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { login, getMe, register, token, changePasswordUser, sendMailForgot } from 'apis';

import { STORAGE } from 'utils/storage';
import { RootState } from 'types';

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
  });
}

export function* changePasswords({
  payload,
}: PayloadAction<{ old_password?: string; new_password: string; token?: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(changePasswordUser, payload);
    if (response.meta.status) {
      yield put(actions.changePasswordSuccess());
    }
  });
}

export function* sendMail({ payload }: PayloadAction<{ email: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(sendMailForgot, payload);
    if (response.meta.status) {
      yield put(actions.sendMailSuccess());
    }
  });
}
export function* getMeSaga() {
  yield sagaCustomize(function* () {
    const response = yield call(getMe);
    yield put(actions.getMeSuccess(response.data));
  });
}

export function* locationChangeSaga() {}

export function* saga() {
  yield takeLatest(actions.login.type, loginSaga);
  yield takeLatest(actions.register.type, registerSaga);
  yield takeLatest(actions.sendVerifyEmail.type, tokenSaga);
  yield takeLatest(actions.getMe.type, getMeSaga);
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
  yield takeLatest(actions.changePassword.type, changePasswords);
  yield takeLatest(actions.sendMail.type, sendMail);
}
