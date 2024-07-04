import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';

import { IUserModel } from 'models';
// import { LocationChangePayload, locationChange } from 'utils/location';

import { saga } from './saga';
import { AuthState } from './types';
import { selectAuth } from './selectors';

export const initialState: AuthState = {
  loading: false,
  authenticated: false,
  user_profile: null,
  step_register: 1,
  temp_token: '',
  isVerifyEmail: false,
  registerEmail: '',
  sendEmailConfirm: false,
  changePasswordSuccess: false,
  registerSuccess: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.authenticated = true;
      state.registerSuccess = false;
      state.step_register = 1;
    },
    getMe: (state) => {
      state.loading = true;
    },
    getMeSuccess: (state, action: PayloadAction<IUserModel>) => {
      state.loading = false;
      state.authenticated = true;
      state.user_profile = action.payload;
    },

    register: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action: PayloadAction<{ data: string; email: string }>) => {
      state.loading = false;
      state.registerEmail = action.payload.email;
    },

    updateStep: (state) => {
      state.step_register += 1;
    },
    setVerifyEmail: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.temp_token = action.payload;
    },

    sendVerifyEmail: (state) => {
      state.loading = true;
    },
    sendVerifyEmailSuccess: (state) => {
      state.loading = false;
      state.isVerifyEmail = true;
      state.registerSuccess = true;
    },
    changePassword: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state) => {
      state.sendEmailConfirm = false;
      state.changePasswordSuccess = true;
    },
    resetChangePassword: (state) => {
      state.changePasswordSuccess = false;
    },
    sendMail: (state) => {
      state.loading = true;
    },
    sendMailSuccess: (state) => {
      state.loading = true;
      state.sendEmailConfirm = true;
    },
    resetSendMail: (state) => {
      state.sendEmailConfirm = false;
    },
    logout: (state) => {
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.authenticated = false;
      state.user_profile = null;
    },
  },
});

export const { actions, reducer } = slice;

export const useAuth = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const login = (payload) => dispatch(actions.login(payload));
  const register = (payload) => dispatch(actions.register(payload));
  const verifyEmail = (payload) => dispatch(actions.sendVerifyEmail(payload));
  const getMe = () => dispatch(actions.getMe());
  const changePasswords = (payload) => dispatch(actions.changePassword(payload));
  const sendMail = (payload) => dispatch(actions.sendMail(payload));
  const resetChangePassword = () => dispatch(actions.resetChangePassword());
  const resetSendMail = () => dispatch(actions.resetSendMail());
  const logout = () => dispatch(actions.logout());
  const state = useSelector(selectAuth);

  return {
    login,
    getMe,
    register,
    verifyEmail,
    changePasswords,
    sendMail,
    resetChangePassword,
    resetSendMail,
    logout,
    ...state,
  };
};
