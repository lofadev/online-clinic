import React from 'react';
import { lazyLoad } from 'utils/loadable';
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';

export const Register: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.SignUp,
  {
    fallback: <LoadingIndicator />,
  },
);
