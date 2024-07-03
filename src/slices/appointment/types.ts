import { TBookingStatus } from 'models/appointment.model';
import { TLang } from 'types/lang';
import { TTypeService } from 'types/service';

interface IAppointment {
  time_id: number;
  time: string;
  status: TBookingStatus;
}

export interface ITimeable {
  date: string;
  appointments: IAppointment[];
}

type TMode = 'ONE_DATE' | 'MANY_DATE';

export interface IAppointmentParams {
  serviceId: number;
  mode: TMode;
  startDate: string;
  endDate: string;
}

export interface ITimeableList {
  date_list: ITimeable[];
  enabled_last_week: boolean;
  enabled_next_week: boolean;
}

export type TAppointmentItem = {
  id: string;
  date: string;
  status: TBookingStatus;
  time: string;
  time_id: number;
  timeStart: string;
  timeEnd: string;
};

export interface IService {
  id: number;
  name: string;
  type: TTypeService;
  note: string;
  image: string;
  insurance_accepted: 0 | 1;
}

export interface AppointmentState {
  timetables: ITimeableList | null;
  params: IAppointmentParams;
  loading: boolean;
  item: TAppointmentItem | null;
  getSuccess: boolean;
  services: IService[] | null;
  service: IService | null;
}

export interface IParamsService {
  type?: TTypeService;
  language?: TLang;
}
