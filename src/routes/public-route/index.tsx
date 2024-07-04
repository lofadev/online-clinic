import React, { useMemo } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import AuthLayout from 'layouts/layout-default';
import { useAuth } from 'slices/auth';

const PublicRoute: React.FC<RouteProps & { component: any; layout: any }> = ({
  component: Component,
  layout: Layout = AuthLayout,
  gender,
  ...rest
}: any) => {
  const { authenticated } = useAuth();
  const location: any = useLocation();
  const pathname = useMemo(() => {
    return location.state?.pathName ?? '/';
  }, []);

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
          <Redirect to={{ pathname, state: {} }} />
        )
      }
    />
  );
};

export default PublicRoute;
