import DefaultLayout from 'layouts/layout-default';
import LayoutSecond from 'layouts/layout-seccond';
import Appointment from 'modules/appointment';
import CompleteAppointment from 'modules/appointment/complete';
import ConfirmAppointment from 'modules/appointment/confirm';
import { ChangePassword } from 'modules/authen/change-password';
import { ForgotPassword } from 'modules/authen/forgot-password';
import { SignIn } from 'modules/authen/sign-in/Loadable';
import { SignUp } from 'modules/authen/sign-up';
import { GenderPage } from 'modules/gender-page';
import { TopPage } from 'modules/top-page';
import { UserProfile } from 'modules/user-profile/Loadable';
import { DrColumnPage } from 'modules/dr-column';
import Usage from 'modules/usage';
import { AuthLayout } from 'layouts/auth-layout';

export const RoutesName = {
  LOGIN: '/login',
  SIGNUP: '/register',
  TOP: '/',
  ABOUT: '/about',
  FAQ: '/hc/ja',
  USAGE: '/usage',
  APPOINTMENT: {
    INDEX: '/appointment',
    CONFIRM: '/appointment/confirm',
    COMPLETE: '/appointment/complete',
  },
  NEW: '/new',
  MALE: '/male',
  FEMALE: '/female',
  CHANGE: '/change-password',
  PROFILE: '/profile',
  FORGOT: '/forgot-password',
  CONSULTATIONS: {
    INDEX: '/',
    DONE: '/consultations/done',
  },
  COLUMN: '/drcolumn',
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
    path: RoutesName.FORGOT,
    component: ForgotPassword,
    layout: LayoutSecond,
    exact: true,
  },
];

export const PRIVATE_ROUTES = [
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
    layout: AuthLayout,
  },
  {
    path: RoutesName.CHANGE,
    component: ChangePassword,
    layout: LayoutSecond,
    exact: true,
  },
  {
    path: RoutesName.COLUMN,
    component: DrColumnPage,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: RoutesName.USAGE,
    component: Usage,
    layout: DefaultLayout,
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
  {
    path: RoutesName.APPOINTMENT.INDEX,
    component: Appointment,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: RoutesName.APPOINTMENT.CONFIRM,
    component: ConfirmAppointment,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: RoutesName.APPOINTMENT.COMPLETE,
    component: CompleteAppointment,
    layout: DefaultLayout,
    exact: true,
  },
];

export default RoutesName;
