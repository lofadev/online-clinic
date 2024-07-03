import { IAddress } from 'models/user.model';
import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getPrefectures = () => {
  return AxiosClient.get(END_POINT.ADDRESS.PREFECTURE);
};

const getAddresses = () => {
  return AxiosClient.get(END_POINT.AUTH.ADDRESSES);
};

const updateAddress = (params: Partial<IAddress>) => {
  if (params.id === 0) {
    return AxiosClient.post(END_POINT.AUTH.ADDRESSES, params);
  }
  return AxiosClient.put(`${END_POINT.AUTH.UPDATE_ADDRESSES}/${params.id}`, params);
};

export { getPrefectures, getAddresses, updateAddress };
