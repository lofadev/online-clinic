import DefaultLayout from 'layouts/layout-default';
import Appointment from 'modules/appointment';
import { SignIn } from 'modules/authen/sign-in/Loadable';
import { SignUp } from 'modules/authen/sign-up';
import { GenderPage } from 'modules/gender-page';
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
  MALE: '/male',
  FEMALE: '/female',
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
  {
    path: RoutesName.MALE,
    component: GenderPage,
    layout: DefaultLayout,
    exact: true,
    gender: 'male',
  },
  {
    path: RoutesName.FEMALE,
    component: GenderPage,
    layout: DefaultLayout,
    exact: true,
    gender: 'female',
  },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
