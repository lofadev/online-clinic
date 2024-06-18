/**
 * Asynchronously loads the component for NotFoundPage
 */
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';

export const NotFoundPage: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.NotFoundPage,
  {
    fallback: <LoadingIndicator />,
  },
);
