import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import { HomePage } from 'modules/HomePage/Loadable';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomePage,
    layout: HomeLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES = [
  // {
  //   path: RoutesName.HOME,
  //   component: HomePage,
  //   layout: HomeLayout,
  //   exact: true,
  // },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
