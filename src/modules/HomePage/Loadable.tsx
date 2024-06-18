/**
 * Asynchronously loads the component for HomePage
 */

import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';
import React from 'react';
import { lazyLoad } from 'utils/loadable';

export const HomePage: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage,
  {
    fallback: <LoadingIndicator />,
  },
);
