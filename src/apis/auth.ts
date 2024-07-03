import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const login = (payload: { email: string; password: string }) => {
  return AxiosClient.post(END_POINT.AUTH.LOGIN, payload);
};

const register = (payload: { email: string; password: string }) => {
  return AxiosClient.post(END_POINT.AUTH.REGISTER, payload);
};
const token = (payload: { data: string }) => {
  return AxiosClient.post(`${END_POINT.AUTH.TOKEN}/${payload.data}`, payload);
};
const getMe = () => {
  return AxiosClient.get(END_POINT.AUTH.GET_ME);
};
const changePasswordUser = (body: { old_password?: string; new_password: string; token?: string }) => {
  return AxiosClient.post(END_POINT.AUTH.CHANGE_PASSWORD, body);
};
const sendMailForgot = (body: { email: string }) => {
  return AxiosClient.post(END_POINT.AUTH.SEND_MAIL_RESTORE, body);
};

export { login, getMe, changePasswordUser, sendMailForgot, register, token };
