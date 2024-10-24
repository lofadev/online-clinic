import { PayloadAction } from '@reduxjs/toolkit';
import { getAddresses, getPrefectures, updateAddress } from 'apis/address';
import { getProfile, updateProfile } from 'apis/user';
import { IAddress, IUserModel, IUserWithAddress, PrefectureProps } from 'models/user.model';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notifActions } from 'slices/notification';
import { IResponse } from 'types/response';
import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';

export function* getProfileSaga() {
  yield sagaCustomize(function* () {
    const [response, addressResponse]: [IResponse<IUserModel>, IResponse<IAddress[]>] = yield all([
      call(getProfile),
      call(getAddresses),
    ]);

    if (response.meta.success === 1 && addressResponse.meta.success === 1) {
      const { data } = response;
      const infomation: Partial<IUserModel> = {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        first_hiragana: data.first_hiragana,
        last_hiragana: data.last_hiragana,
        gender: data.gender,
        date_of_birth: data.date_of_birth,
        email: data.email,
        deliveryPhone: data.phone,
        medical_number: data.medical_number,
      };

      yield put(actions.getProfileSuccess(infomation));
      yield put(actions.getAddressesSuccess(addressResponse.data));
    }
  });
}

export function* getPrefectureSaga() {
  yield sagaCustomize(function* () {
    const response: IResponse<PrefectureProps[]> = yield call(getPrefectures);
    if (response.meta.success === 1) {
      yield put(actions.getPrefectureSuccess(response.data));
    } else {
      yield put(
        notifActions.setNotif({
          type: 'error',
          message: 'error',
          description: 'エラーが',
        }),
      );
    }
  });
}

export function* updateProfileSaga(action: PayloadAction<IUserWithAddress>) {
  yield sagaCustomize(function* () {
    const [response, addressResponse]: [IResponse<IUserModel>, IResponse<IAddress[]>] = yield all([
      call(updateProfile, action.payload.info),
      call(updateAddress, action.payload.address),
    ]);

    if (response.meta.success === 1 && addressResponse.meta.success === 1) {
      yield put(
        notifActions.setNotif({
          type: 'success',
          message: 'success',
          description: response.meta.message,
        }),
      );
    } else {
      yield put(
        notifActions.setNotif({
          type: 'error',
          message: 'error',
          description: 'アップデートに失敗しました',
        }),
      );
    }
  });
}

export function* saga() {
  yield takeLatest(actions.getProfile.type, getProfileSaga);
  yield takeLatest(actions.getPrefecture.type, getPrefectureSaga);
  yield takeLatest(actions.updateProfile.type, updateProfileSaga);
}
