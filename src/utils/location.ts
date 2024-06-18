import type { Location, Action } from 'history';

import { createAction } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'redux-first-history';

interface LocationChangePayload {
  location: Location;
  action: Action;
}
export const locationChange = createAction<LocationChangePayload>(LOCATION_CHANGE);
export { LOCATION_CHANGE };
export type { LocationChangePayload };
