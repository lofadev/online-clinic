/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';

import LoadingIndicator from 'components/loading-indicator/LoadingIndicator';

export const Usage: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.Usage,
  {
    fallback: <LoadingIndicator />,
  },
);
