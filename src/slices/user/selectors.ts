import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => {
  return state;
};

export const selectUser = createSelector(selectDomain, ({ user = initialState }) => user);
