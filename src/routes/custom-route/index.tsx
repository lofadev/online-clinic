import { Route } from 'react-router-dom';

import HomeLayout from 'layouts/layout-default';

function CustomRoute({ component: Component, layout: Layout = HomeLayout, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default CustomRoute;
