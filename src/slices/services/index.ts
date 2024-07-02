import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { GenderServices, ServicesState } from './types';
import { selectServices } from './selectors';
import { saga } from './saga';

export const initialState: ServicesState = {
  serviceList: [],
  medicalSubjectList: [],
  gender: 'GENERAL',
};

const slice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    fetchServices(state, action: PayloadAction<GenderServices>) {
      state.gender = action.payload;
    },
    fetchServicesSuccess(state, action: PayloadAction<ServicesState>) {
      state.serviceList = action.payload.serviceList;
      state.medicalSubjectList = action.payload.medicalSubjectList;
      // console.log(state.serviceList);
    },
  },
});

export const { actions, reducer } = slice;
export const useServicesSlice = () => {
  const { actions, name, reducer } = slice;
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();
  const state = useSelector(selectServices);
  const fetchServices = (payload: GenderServices) => dispatch(actions.fetchServices(payload));
  return {
    fetchServices,
    ...state,
  };
};
export default slice;
