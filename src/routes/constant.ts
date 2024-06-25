import DefaultLayout from 'layouts/layout-default';
import { SignIn } from 'modules/authen/sign-in/Loadable';
import { SignUp } from 'modules/authen/sign-up';
import { TopPage } from 'modules/top-page';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
  SIGNUP: '/register',
  TOP: '/top',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.TOP,
    component: TopPage,
    layout: DefaultLayout,
    exact: true,
  },

  {
    path: RoutesName.LOGIN,
    component: SignIn,
    layout: DefaultLayout,
    exact: true,
  },

  {
    path: RoutesName.SIGNUP,
    component: SignUp,
    layout: DefaultLayout,
    exact: true,
  },

  {
    path: RoutesName.HOME,
    component: TopPage,
    layout: DefaultLayout,
    exact: true,
  },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
