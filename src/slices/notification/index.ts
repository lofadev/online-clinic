import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { NotificationParams, NotificationState } from './types';
import { selectNotification } from './selectors';

export const initialState: NotificationState = {
  notif: undefined,
};

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotif(state, action: PayloadAction<NotificationParams>) {
      state.notif = action.payload;
    },
  },
});

export const { actions: notifActions, reducer } = slice;

export const useNotification = () => {
  const dispatch = useDispatch();
  useInjectReducer({ key: slice.name, reducer });

  const setNotif = (state: NotificationParams) => {
    dispatch(slice.actions.setNotif(state));
  };

  const notif = useSelector(selectNotification);

  return {
    notif,
    setNotif,
  };
};
