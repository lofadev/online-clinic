import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => {
  return state;
};

export const selectAppointment = createSelector(selectDomain, ({ appointment = initialState }) => appointment);
