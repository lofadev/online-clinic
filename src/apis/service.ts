import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getService = () => {
  return AxiosClient.get(END_POINT.SERVICE.FETCH);
};

const getServiceById = (id: string) => {
  return AxiosClient.get(`${END_POINT.SERVICE.FETCH}/${id}`);
};

export { getService, getServiceById };
