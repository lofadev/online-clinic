/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { InjectedReducersType } from 'utils/types/injector-typings';
import themeSlice from '../slices/theme';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    router: routerReducer,
    theme: themeSlice.reducer,
    ...injectedReducers,
  });
}

export { createReducer, routerMiddleware, createReduxHistory };
