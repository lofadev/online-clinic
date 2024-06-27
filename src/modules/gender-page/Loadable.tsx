import React from 'react';
import { lazyLoad } from 'utils/loadable';

import LoadingIndicator from 'components/loading-indicator/LoadingIndicator';
import { PropsGenderPage } from './index';

export const GenderPage: React.FC<PropsGenderPage> = lazyLoad(
  () => import('./index'),
  (module) => module.GenderPage,
  {
    fallback: <LoadingIndicator />,
  },
);
