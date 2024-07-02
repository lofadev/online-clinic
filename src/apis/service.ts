import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getService = () => {
  return AxiosClient.get(END_POINT.SERVICE.GET_SIEKTE);
};

const getServiceById = (id: string) => {
  return AxiosClient.get(`${END_POINT.SERVICE.GET_SIEKTE}/${id}`);
};

export { getService, getServiceById };
