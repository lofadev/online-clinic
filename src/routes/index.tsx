/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Switch } from 'react-router-dom';

import { NotFoundPage } from 'modules/notfound-page';

import { CUSTOME_ROUTE, PRIVATE_ROUTES, PUBLIC_ROUTES } from './constant';
import CustomRoute from './custom-route';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {PRIVATE_ROUTES.map((routeConfig) => (
        <PrivateRoute key={routeConfig.path} {...routeConfig} />
      ))}
      {PUBLIC_ROUTES.map((routeConfig) => (
        <PublicRoute key={routeConfig.path} {...routeConfig} />
      ))}
      {CUSTOME_ROUTE.map((routeConfig) => (
        <CustomRoute key={routeConfig.path} {...routeConfig} />
      ))}
      <CustomRoute path="*" component={NotFoundPage} />
    </Switch>
  );
};
export default AppRoutes;
