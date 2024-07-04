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
  IAppointmentItem,
  IAppointmentParams,
  IParamsService,
  IPostAppointment,
  IService,
  ITimeableList,
  TAction,
  TAppointmentItem,
  TTypeAppointment,
} from './types';

export const initialState: AppointmentState = {
  timetables: null,
  params: {
    serviceId: 0,
    mode: 'MANY_DATE',
    startDate: getDate(),
    endDate: getDate(6),
  },
  type: 'FIRST',
  loading: false,
  getSuccess: false,
  item: null,
  services: null,
  service: null,
  lists: [],
  detail: null,
  action: 'create',
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

    fetchAppointment: (state) => {
      state.loading = true;
    },

    fetchAppointmentSuccess: (state, action: PayloadAction<IAppointmentItem[]>) => {
      state.lists = action.payload;
      state.loading = false;
    },

    getAppointment: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },

    getAppointmentSuccess: (state, action: PayloadAction<IAppointmentItem>) => {
      state.detail = action.payload;
      state.loading = false;
    },

    cancelAppointment: (state, action: PayloadAction<{ id: string; cancel_reason: string }>) => {},

    setType: (state, action: PayloadAction<TTypeAppointment>) => {
      state.type = action.payload;
    },

    setAction: (state, action: PayloadAction<TAction>) => {
      state.action = action.payload;
    },

    updateAppointment: (state, action: PayloadAction<{ id: number; data: IPostAppointment }>) => {},
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
  const fetchAppointment = () => dispatch(actions.fetchAppointment());
  const getAppointment = (id: string) => dispatch(actions.getAppointment(id));
  const cancelAppointment = (id: string, cancel_reason: string) =>
    dispatch(actions.cancelAppointment({ id, cancel_reason }));
  const setType = (type: TTypeAppointment) => dispatch(actions.setType(type));
  const setAction = (action: TAction) => dispatch(actions.setAction(action));
  const updateAppointment = (id: number, payload: IPostAppointment) =>
    dispatch(actions.updateAppointment({ id, data: payload }));

  const state = useSelector(selectAppointment);

  return {
    ...state,
    getReservationTimeables,
    updateItem,
    fetchServices,
    resetTimetables,
    findService,
    createAppointment,
    fetchAppointment,
    getAppointment,
    cancelAppointment,
    setType,
    setAction,
    updateAppointment,
  };
};
