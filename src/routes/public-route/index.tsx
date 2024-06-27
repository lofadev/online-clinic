import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import AuthLayout from 'layouts/layout-default';
import { useAuth } from 'slices/auth';

const PublicRoute: React.FC<RouteProps & { component: any; layout: any }> = ({
  component: Component,
  layout: Layout = AuthLayout,
  gender,
  ...rest
}: any) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      exact
      render={(props: any) =>
        !authenticated ? (
          <Layout>
            <Component gender={gender} {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/', state: {} }} />
        )
      }
    />
  );
};

export default PublicRoute;
