/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { IAddress, IUserModel, IUserWithAddress, PrefectureProps } from 'models/user.model';
import { saga } from './saga';
import { UserState } from './types';
import { selectUser } from './selectors';

export const initialState: UserState = {
  loading: false,
  prefectureList: [],
  userProfile: undefined,
  addresses: undefined,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getProfile: (state) => {
      state.loading = true;
    },
    getProfileSuccess: (state, action: PayloadAction<Partial<IUserModel>>) => {
      state.loading = false;
      state.userProfile = action.payload;
    },
    getPrefecture: () => {},
    getPrefectureSuccess: (state, action: PayloadAction<PrefectureProps[]>) => {
      state.prefectureList = action.payload;
    },
    getAddresses: () => {},
    getAddressesSuccess: (state, action: PayloadAction<IAddress[]>) => {
      state.addresses = action.payload;
    },
    updateProfile: (state, action: PayloadAction<IUserWithAddress>) => {
      state.loading = true;
    },
    updateProfileSuccess: (state) => {
      state.loading = false;
    },

    updateAddressSuccess: (state) => {
      state.loading = false;
    },
  },
});

export const { actions, reducer } = slice;

export const useUserProfile = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const getProfile = () => dispatch(actions.getProfile());
  const getPrefecture = () => dispatch(actions.getPrefecture());
  const getAddesses = () => dispatch(actions.getAddresses());
  const updateProfile = (payload: IUserWithAddress) => dispatch(actions.updateProfile(payload));
  const state = useSelector(selectUser);

  return {
    getProfile,
    getPrefecture,
    getAddesses,
    updateProfile,
    ...state,
  };
};
