export interface IAddress {
  id: number;
  zip_code: string;
  municipality: string;
  address: string;
  phone: string;
  default_flg: number;
  prefecture?: {
    id: number;
    name?: string;
    name_jp?: string;
  };
  prefecture_id: number;
}

export interface IUserModel {
  id?: number;
  email?: string;
  phone: string;
  first_name: string;
  last_name: string;
  first_hiragana: string;
  last_hiragana: string;
  gender: number;
  deliveryPhone: string;
  zip_code: string;
  prefecture: number;
  municipality: string;
  address: string;
  date_of_birth: string;
  year?: string;
  month?: string;
  day?: string;
  medical_number?: number;
}

export interface IUserWithAddress {
  info: Partial<IUserModel>;
  address: Partial<IAddress>;
}

export type PrefectureProps = {
  id: number;
  name: string;
  name_jp: string;
  active_flg: number;
  created_at: string;
  deleted_at: string;
  updated_at: string;
};

export type PrefectureCoverProps = {
  id: number;
  label: string;
  value: string | number;
};

export interface IGenderOptions {
  label: string;
  value: string | number;
}
