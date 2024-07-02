import DefaultLayout from 'layouts/layout-default';
import LayoutSecond from 'layouts/layout-seccond';
import Appointment from 'modules/appointment';
import { ChangePassword } from 'modules/authen/change-password';
import { SignIn } from 'modules/authen/sign-in/Loadable';
import { SignUp } from 'modules/authen/sign-up';
import { UserProfile } from 'modules/user-profile/Loadable';
import { GenderPage } from 'modules/gender-page';
import { TopPage } from 'modules/top-page';

export const RoutesName = {
  LOGIN: '/login',
  SIGNUP: '/register',
  TOP: '/',
  ABOUT: '/about',
  FAQ: '/hc/ja',
  USAGE: '/usage',
  APPOINTMENT: '/appointment',
  NEW: '/new',
  MALE: '/male',
  FEMALE: '/female',
  CHANGE: '/change-password',
  PROFILE: '/profile',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.LOGIN,
    component: SignIn,
    layout: LayoutSecond,
    exact: true,
  },
  {
    path: RoutesName.SIGNUP,
    component: SignUp,
    layout: LayoutSecond,
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
  {
    path: RoutesName.CHANGE,
    component: ChangePassword,
    layout: DefaultLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: RoutesName.TOP,
    component: TopPage,
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
  {
    path: RoutesName.PROFILE,
    component: UserProfile,
    layout: LayoutSecond,
    exact: true,
  },
];
export const CUSTOME_ROUTE = [
  {
    path: RoutesName.TOP,
    component: TopPage,
    layout: DefaultLayout,
    exact: true,
  },
];

export default RoutesName;
