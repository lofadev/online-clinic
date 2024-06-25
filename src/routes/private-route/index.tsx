import { Redirect, Route, RouteProps } from 'react-router-dom';

import HomeLayout from 'layouts/layout-default';
import React from 'react';
import { useAuth } from 'slices/auth';

const PrivateRoute: React.FC<RouteProps & { component: any; layout: any }> = ({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}) => {
  const { authenticated } = useAuth();
  return (
    <Route
      {...rest}
      exact
      render={(props: any) =>
        authenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { pathname: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
