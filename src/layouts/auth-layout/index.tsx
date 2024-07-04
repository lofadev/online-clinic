import BottomFooter from 'components/footer/bottom-footer';
import MainFooter from 'components/footer/main-footer';
import { translations } from 'locales/translations';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useHistory } from 'react-router-dom';
import RoutesName from 'routes/constant';
import { useAuth } from 'slices';
import { Button } from 'components';
import { ReserveIcon } from 'assets';
import TopHeader from 'components/header/top-header/top-header';

import {
  AppointmentImageStyled,
  AppointmentWrapper,
  HeaderStyled,
  NavigatorStyled,
  PasswordChangeStyled,
} from './styled';

type AuthHeaderProps = {
  children: ReactNode;
};

export const AuthLayout: FC<AuthHeaderProps> = ({ children }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { userInfomation } = translations;
  const { user_profile } = useAuth();

  return (
    <>
      <TopHeader />
      {user_profile && (
        <>
          <HeaderStyled>
            <ul>
              <li>
                <span>
                  {user_profile?.first_name && user_profile.last_name
                    ? `${user_profile?.first_name} ${user_profile.last_name} `
                    : ''}
                </span>
                {t(userInfomation.my_page)}
              </li>
              <li>
                {t(userInfomation.medical_number)}
                <span>{user_profile?.medical_number}</span>
              </li>
              <PasswordChangeStyled>
                <Link to={RoutesName.CHANGE}>
                  <span>{t(userInfomation.change_password)}</span>
                </Link>
              </PasswordChangeStyled>
            </ul>
          </HeaderStyled>
          <NavigatorStyled>
            <ul>
              <li>
                <NavLink to="/consultations">{t(userInfomation.top_page)}</NavLink>
              </li>
              <li>
                <NavLink to="/consultations/done">{t(userInfomation.medical_treatment)}</NavLink>
              </li>
              <AppointmentWrapper onClick={() => history.push(RoutesName.APPOINTMENT.INDEX)}>
                <Button size="small">
                  <AppointmentImageStyled src={ReserveIcon} alt="icon" />
                  {t(userInfomation.appointment_button)}
                </Button>
              </AppointmentWrapper>
            </ul>
          </NavigatorStyled>
        </>
      )}

      {children}
      <MainFooter />
      <BottomFooter />
    </>
  );
};
