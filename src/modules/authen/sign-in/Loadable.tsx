/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';
// import styled from 'styled-components';

export const SignIn: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.SignIn,
  {
    fallback: <LoadingIndicator />,
  },
);
