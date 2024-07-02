import { call, put, takeLatest } from 'redux-saga/effects';
import { sagaCustomize } from 'slices/sagaCustomize';
import { IService } from 'types/Service';
import { getService } from 'apis/service';
import { ServicesState } from './types';

import { actions } from '.';

export function* fetchServices(action: any) {
  yield sagaCustomize(function* () {
    const response = yield call(getService);

    if (response.meta.status) {
      let listServiceSuccess: IService[] = [];
      let listMedicalSubjectSuccess: IService[] = [];
      if (action.payload === 'FOR_MALE') {
        listMedicalSubjectSuccess = response.data.filter((item: IService) => item.type === 'FOR_MALE');
        listServiceSuccess = response.data.filter((item: IService) => item.type === 'GENERAL');
      } else if (action.payload === 'FOR_FEMALE') {
        listMedicalSubjectSuccess = response.data.filter((item: IService) => item.type === 'FOR_FEMALE');
        listServiceSuccess = response.data.filter((item: IService) => item.type === 'GENERAL');
      } else if (action.payload === 'ALL') {
        listMedicalSubjectSuccess = [];
        listServiceSuccess = response.data;
      }

      const dataSuccess: ServicesState = {
        serviceList: listServiceSuccess,
        medicalSubjectList: listMedicalSubjectSuccess,
        gender: action.payload,
      };

      yield put(actions.fetchServicesSuccess(dataSuccess));
    }
  });
}
export function* saga() {
  yield takeLatest(actions.fetchServices.type, fetchServices);
}
