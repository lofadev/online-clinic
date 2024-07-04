import { PayloadAction } from '@reduxjs/toolkit';
import * as apiAppointment from 'apis/appointment.api';
import * as apiService from 'apis/service.api';
import history from 'configs/history';
import { call, put, takeLatest } from 'redux-saga/effects';
import { sagaCustomize } from 'slices/sagaCustomize';
import { IResponse } from 'types/response';
import { actions } from '.';
import {
  IAppointmentItem,
  IAppointmentParams,
  IParamsService,
  IPostAppointment,
  IResPostAppointment,
  IService,
  ITimeableList,
} from './types';

function* getReservationTimeables({ payload }: PayloadAction<IAppointmentParams>) {
  yield sagaCustomize(function* () {
    const response: IResponse<ITimeableList> = yield call(apiAppointment.getReservationTimeables, payload);
    if (response.meta.success) {
      yield put(actions.getReservationTimeableSuccess(response.data));
    }
  });
}

function* fetchServices({ payload }: PayloadAction<IParamsService | undefined>) {
  yield sagaCustomize(function* () {
    const response: IResponse<IService[]> = yield call(apiService.fetchServices, payload);
    if (response.meta.success) {
      yield put(actions.fetchServicesSuccess(response.data));
    }
  });
}

function* createAppointment({ payload }: PayloadAction<IPostAppointment>) {
  yield sagaCustomize(function* () {
    const response: IResponse<IResPostAppointment> = yield call(apiAppointment.create, payload);
    if (response.meta.success) {
      history.push(`/appointment/complete?id=${response.data.id}`);
    }
  });
}

function* updateAppointment({ payload }: PayloadAction<{ id: number; data: IPostAppointment }>) {
  yield sagaCustomize(function* () {
    const response: IResponse<IResPostAppointment> = yield call(apiAppointment.update, payload);
    if (response.meta.success) {
      history.push(`/appointment/complete?id=${response.data.id}`);
    }
  });
}

function* fetchAppointment() {
  yield sagaCustomize(function* () {
    const response: IResponse<IAppointmentItem[]> = yield call(apiAppointment.fetch);
    if (response.meta.success) {
      yield put(actions.fetchAppointmentSuccess(response.data));
    }
  });
}

function* getAppointment({ payload }: PayloadAction<string>) {
  yield sagaCustomize(function* () {
    const response: IResponse<IAppointmentItem> = yield call(apiAppointment.get, payload);
    if (response.meta.success) {
      yield put(actions.getAppointmentSuccess(response.data));
    }
  });
}

function* cancelAppointment({ payload }: PayloadAction<{ id: string; cancel_reason: string }>) {
  yield sagaCustomize(function* () {
    const response: IResponse<IAppointmentItem> = yield call(apiAppointment.cancel, payload);
    if (response.meta.success) {
      history.push('/consultations');
    }
  });
}

export function* saga() {
  yield takeLatest(actions.getReservationTimeable.type, getReservationTimeables);
  yield takeLatest(actions.fetchServices.type, fetchServices);
  yield takeLatest(actions.createAppointment.type, createAppointment);
  yield takeLatest(actions.updateAppointment.type, updateAppointment);
  yield takeLatest(actions.fetchAppointment.type, fetchAppointment);
  yield takeLatest(actions.getAppointment.type, getAppointment);
  yield takeLatest(actions.cancelAppointment.type, cancelAppointment);
}
