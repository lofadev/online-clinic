import { IUserModel } from 'models/user.model';
import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getProfile = () => {
  return AxiosClient.get(END_POINT.AUTH.PROFILE);
};

const updateProfile = (params: Partial<IUserModel>) => {
  return AxiosClient.put(END_POINT.AUTH.PROFILE, params);
};

export { getProfile, updateProfile };
