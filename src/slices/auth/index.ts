import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';

import { UserModel } from 'models';
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
};

// const locationChange = createAction(LOCATION_CHANGE);
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.authenticated = true;
    },
    getMe: (state) => {
      state.loading = true;
    },
    getMeSuccess: (state, action: PayloadAction<UserModel>) => {
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
      state.step_register += 1;
    },
    logout: (state) => {
      state.loading = false;
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
  const state = useSelector(selectAuth);

  return {
    login,
    getMe,
    register,
    verifyEmail,
    ...state,
  };
};
