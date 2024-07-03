import React from 'react';
import { lazyLoad } from 'utils/loadable';
import LoadingIndicator from 'components/loading-indicator/LoadingIndicator';

export const ForgotPassword: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.ForgotPassword,
  {
    fallback: <LoadingIndicator />,
  },
);
