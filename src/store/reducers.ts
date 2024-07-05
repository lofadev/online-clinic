/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from 'utils/types/injector-typings';
import themeSlice from '../slices/theme';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    theme: themeSlice.reducer,
    ...injectedReducers,
  });
}

export { createReducer };
