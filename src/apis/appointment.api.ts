import { IAppointmentParams, IPostAppointment } from 'slices/appointment/types';
import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getReservationTimeables = (params: IAppointmentParams) => {
  return AxiosClient.get(END_POINT.APPOINTMENT.RESERVATION_TIMETABLES, { params });
};

const create = (payload: IPostAppointment) => {
  return AxiosClient.post(END_POINT.APPOINTMENT.FETCH, payload);
};

const update = (payload: { id: number; data: IPostAppointment }) => {
  return AxiosClient.put(`${END_POINT.APPOINTMENT.FETCH}/${payload.id}`, payload.data);
};

const fetch = () => {
  return AxiosClient.get(END_POINT.APPOINTMENT.FETCH);
};

const get = (id: string) => {
  return AxiosClient.get(`${END_POINT.APPOINTMENT.FETCH}/${id}`);
};

const cancel = (payload: { id: string; cancel_reason: string }) => {
  return AxiosClient.patch(`${END_POINT.APPOINTMENT.FETCH}/${payload.id}`, { cancel_reason: payload.cancel_reason });
};

export { getReservationTimeables, create, fetch, get, cancel, update };
