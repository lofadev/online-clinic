import { put } from 'redux-saga/effects';
import { errorActions } from './errors';
import { loadingActions } from './loading';

export function* sagaCustomize(callbackAction) {
  try {
    yield put(loadingActions.setLoading(true));
    yield callbackAction();
    yield put(loadingActions.setLoading(false));
  } catch (error: any) {
    yield put(errorActions.setError(error));
    yield put(loadingActions.setLoading(false));
  }
}
