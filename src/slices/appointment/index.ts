/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { getDate } from 'utils/date';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { selectAppointment } from './selectors';
import {
  AppointmentState,
  IAppointmentParams,
  IParamsService,
  IPostAppointment,
  IService,
  ITimeableList,
  TAppointmentItem,
} from './types';

export const initialState: AppointmentState = {
  timetables: null,
  params: {
    serviceId: 0,
    mode: 'MANY_DATE',
    startDate: getDate(),
    endDate: getDate(6),
  },
  loading: false,
  item: null,
  getSuccess: false,
  services: null,
  service: null,
};

const slice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    getReservationTimeable: (state, action: PayloadAction<IAppointmentParams>) => {
      state.loading = true;
    },

    getReservationTimeableSuccess: (state, action: PayloadAction<ITimeableList>) => {
      state.loading = false;
      state.getSuccess = true;
      state.timetables = action.payload;
      state.params = {
        ...state.params,
        startDate: state.timetables.date_list[0].date,
        endDate: state.timetables.date_list[6].date,
      };
    },

    fetchServices: (state, action: PayloadAction<IParamsService | undefined>) => {},

    fetchServicesSuccess: (state, action: PayloadAction<IService[]>) => {
      state.services = action.payload;
    },

    findService: (state, action: PayloadAction<number>) => {
      state.service = state.services?.find((s) => s.id === action.payload) ?? null;
    },

    resetTimetables: (state) => {
      state.getSuccess = false;
      state.timetables = null;
    },

    updateItem: (state, action: PayloadAction<TAppointmentItem>) => {
      state.item = action.payload;
    },

    createAppointment: (state, action: PayloadAction<IPostAppointment>) => {},
  },
});

export const { actions, reducer } = slice;

export const useAppointment = () => {
  const { name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const getReservationTimeables = (params: IAppointmentParams) => dispatch(actions.getReservationTimeable(params));
  const updateItem = (payload: TAppointmentItem) => dispatch(actions.updateItem(payload));
  const fetchServices = (payload?: IParamsService) => dispatch(actions.fetchServices(payload));
  const resetTimetables = () => dispatch(actions.resetTimetables());
  const findService = (serviceId: number) => dispatch(actions.findService(serviceId));
  const createAppointment = (payload: IPostAppointment) => dispatch(actions.createAppointment(payload));

  const state = useSelector(selectAppointment);

  return {
    ...state,
    getReservationTimeables,
    updateItem,
    fetchServices,
    resetTimetables,
    findService,
    createAppointment,
  };
};
