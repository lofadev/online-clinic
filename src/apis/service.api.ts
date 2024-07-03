import { IParamsService } from 'slices/appointment/types';
import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const fetchServices = (params?: IParamsService) => {
  return AxiosClient.get(END_POINT.SERVICE.FETCH, { params });
};

export { fetchServices };
