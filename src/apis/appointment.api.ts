import { IAppointmentParams, IPostAppointment } from 'slices/appointment/types';
import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getReservationTimeables = (params: IAppointmentParams) => {
  return AxiosClient.get(END_POINT.APPOINTMENT.RESERVATION_TIMETABLES, { params });
};

const create = (payload: IPostAppointment) => {
  return AxiosClient.post(END_POINT.APPOINTMENT.FETCH, { payload });
};

export { getReservationTimeables, create };
