/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { NotFoundPage } from 'modules/notfound-page';
import PrivateRoute from './private-route';

import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './constant';
import CustomRoute from './custom-route';
import PublicRoute from './public-route';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {PRIVATE_ROUTES.map((routeConfig) => (
          <PrivateRoute key={routeConfig.path} {...routeConfig} />
        ))}
        {PUBLIC_ROUTES.map((routeConfig) => (
          <PublicRoute key={routeConfig.path} {...routeConfig} />
        ))}
        <CustomRoute path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;
