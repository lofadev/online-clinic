import HomeLayout from 'layouts/home-layout/HomeLayout';
import { SignIn } from 'modules/authen/sign-in/Loadable';
import { SignUp } from 'modules/authen/sign-up';
import { HomePage } from 'modules/home-page/Loadable';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
  SIGNUP: '/register',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomePage,
    layout: HomeLayout,
    exact: true,
  },

  {
    path: RoutesName.LOGIN,
    component: SignIn,
    layout: HomeLayout,
    exact: true,
  },

  {
    path: RoutesName.SIGNUP,
    component: SignUp,
    layout: HomeLayout,
    exact: true,
  },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
