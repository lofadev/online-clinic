import { PayloadAction } from '@reduxjs/toolkit';
import * as apiService from 'apis/service.api';
import * as apiAppointment from 'apis/appointment.api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { sagaCustomize } from 'slices/sagaCustomize';
import { IResponse } from 'types/response';
import { actions } from '.';
import { IAppointmentParams, IParamsService, IService, ITimeableList } from './types';

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

export function* saga() {
  yield takeLatest(actions.getReservationTimeable.type, getReservationTimeables);
  yield takeLatest(actions.fetchServices.type, fetchServices);
}
