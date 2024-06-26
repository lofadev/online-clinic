import DefaultLayout from 'layouts/layout-default';
import Appointment from 'modules/appointment';
import { SignIn } from 'modules/authen/sign-in/Loadable';
import { SignUp } from 'modules/authen/sign-up';
import { TopPage } from 'modules/top-page';

export const RoutesName = {
  TOP: '/',
  LOGIN: '/login',
  SIGNUP: '/register',
  ABOUT: '/about',
  FAQ: '/hc/ja',
  USAGE: '/usage',
  APPOINTMENT: '/appointment',
  NEW: '/new',
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
    path: RoutesName.APPOINTMENT,
    component: Appointment,
    layout: DefaultLayout,
    exact: true,
  },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
