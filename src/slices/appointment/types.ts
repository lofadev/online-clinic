import { TBookingStatus } from 'models/appointment.model';
import { TLang } from 'types/lang';
import { TTypeService } from 'types/service';

type TStatusAppointment = 'NEW' | 'ACCEPTED' | 'CANCEL' | 'COMPLETED';
export type TTypeAppointment = 'FIRST' | 'RETURN';
type TTypeReservation = 'SCHEDULE' | 'NOW';

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

export interface IAppointmentItem {
  id: number;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    medical_number: number;
  };
  service: {
    id: number;
    name: string;
    type: TTypeService;
  };
  appointment_type: TTypeAppointment;
  reservation_type: TTypeReservation;
  time: {
    id: number;
    start_time: string;
    end_time: string;
  };
  booking_date: string;
  status: TStatusAppointment;
  payment_method: string | null;
  questionnaire_flg: 0 | 1;
  cancel_reason: string | null;
  created_at: string;
  updated_at: string;
}

export type TAction = 'update' | 'create' | null;

export interface AppointmentState {
  timetables: ITimeableList | null;
  params: IAppointmentParams;
  loading: boolean;
  item: TAppointmentItem | null;
  getSuccess: boolean;
  services: IService[] | null;
  service: IService | null;
  lists: IAppointmentItem[];
  detail: IAppointmentItem | null;
  type: TTypeAppointment;
  action: TAction;
}

export interface IParamsService {
  type?: TTypeService;
  language?: TLang;
}

export interface IPostAppointment {
  service_id: number;
  appointment_type: TTypeAppointment;
  reservation_type: TTypeReservation;
  booking_date: string;
  time_id: number;
}

export interface IResPostAppointment {
  service_id: number;
  appointment_type: TTypeAppointment;
  reservation_type: TTypeReservation;
  booking_date: string;
  time_id: number;
  payment_method: string;
  user_id: number;
  status: TStatusAppointment;
  updated_at: string;
  created_at: string;
  id: number;
}
