import { FC } from 'react';

import history from 'configs/history';
import i18next from 'i18next';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import RoutesName from 'routes/constant';
import IconHeader, { PropsIconHeader } from '../icon-header';
import {
  ImageIcon,
  ImageLogo,
  LeftTopHeader,
  RightTopHeader,
  SwitchChangeLanguage,
  SwitchStyled,
  TopHeaderStyle,
} from './styled';

const TopHeader: FC = () => {
  const { t } = useTranslation();
  const { header } = translations;

  const handleGoHome = () => {
    history.push('/');
  };

  const listPropsIcon: PropsIconHeader[] = [
    {
      id: 1,
      icon: 'https://navismithapis-cdn.com/img/notification.svg',
      notice: 1,
      path: '/notification',
    },
    {
      id: 2,
      icon: 'https://navismithapis-cdn.com/img/bookmark.svg',
      notice: 0,
      path: '',
      children: [
        {
          id: 1,
          content: t(header.services.ebook),
          path: '/path1',
        },
        { id: 2, content: t(header.services.dmm_tv), path: '/path2' },
        {
          id: 3,
          content: t(header.services.home_delivery_rental),
          path: '/path3',
        },
        {
          id: 4,
          content: t(header.services.online_crane_game),
          path: '/path4',
        },
        {
          id: 5,
          content: t(header.services.pc_games_software),
        },
        {
          id: 6,
          content: t(header.services.online_shopping),
        },
      ],
    },
    {
      id: 3,
      icon: 'https://navismithapis-cdn.com/img/coupon.svg',
      notice: 0,
      path: '/coupon',
    },
    {
      id: 4,
      icon: 'https://navismithapis-cdn.com/img/help.svg',
      notice: 0,
      path: '/help',
    },
    {
      id: 5,
      icon: 'https://navismithapis-cdn.com/img/point.svg',
      notice: 0,
      path: '/point',
    },
    {
      id: 6,
      icon: 'https://navismithapis-cdn.com/img/login.svg',
      notice: 0,
      path: 'user',
      children: [
        {
          id: 1,
          icon: 'https://navismithapis-cdn.com/img/login.svg',
          content: t(header.account.dmm_account_info),
          path: `${RoutesName.PROFILE}`,
        },
        {
          id: 2,
          icon: 'https://navismithapis-cdn.com/img/premium.svg',
          content: t(header.account.dmm_premium_mypage),
          path: '/path2',
        },
        {
          id: 3,
          icon: 'https://navismithapis-cdn.com/img/payment.svg',
          content: t(header.account.credit_card_info),
          path: '/path3',
        },
        {
          id: 4,
          icon: 'https://navismithapis-cdn.com/img/point.svg',
          content: t(header.account.dmm_points),
        },
        {
          id: 5,
          icon: 'https://navismithapis-cdn.com/img/point_exchange.svg',
          content: t(header.account.point_exchange),
        },
        {
          id: 6,
          icon: 'https://navismithapis-cdn.com/img/notification.svg',
          content: t(header.account.notification_settings),
        },
        {
          id: 7,
          content: t(header.account.service_usage_info),
          path: '/path4',
        },
        {
          id: 8,
          content: t(header.account.help_center),
          path: '/path5',
        },
      ],
    },
  ];

  const { i18n } = useTranslation();
  const changeLanguage = (value: boolean) => {
    if (value) {
      i18n.changeLanguage('jp');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <TopHeaderStyle>
      <LeftTopHeader>
        <ImageIcon src="https://navismithapis-cdn.com/img/service.svg" alt="iconMenu" />

        <ImageLogo src="https://p-smith.com/logo/clinic_com.svg" alt="logo" onClick={handleGoHome} />
      </LeftTopHeader>

      <RightTopHeader>
        <SwitchChangeLanguage>
          <SwitchStyled
            checkedChildren="JP"
            unCheckedChildren="EN"
            defaultChecked={i18next.language === 'jp'}
            onChange={(value) => {
              changeLanguage(value);
            }}
          />
        </SwitchChangeLanguage>
        {listPropsIcon.length && listPropsIcon.map((icons) => <IconHeader {...icons} key={icons.id} />)}
      </RightTopHeader>
    </TopHeaderStyle>
  );
};
export default TopHeader;
