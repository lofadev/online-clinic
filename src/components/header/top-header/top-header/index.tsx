import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import IconHeader, { PropsIconHeader } from '../icon-header';
import { ImageIcon, ImageLogo, LeftTopHeader, RightTopHeader, TopHeaderStyle } from './style';

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
        content: '電子書籍',
        path: '/path1',
      },
      { id: 2, content: 'DMM TV', path: '/path2' },
      {
        id: 3,
        content: '宅配レンタル',
        path: '/path3',
      },
      {
        id: 4,
        content: 'オンラインクレーンゲーム',
        path: '/path4',
      },
      {
        id: 5,
        content: 'PCゲーム/ソフトウェア',
      },
      {
        id: 6,
        content: '通販',
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
        content: 'DMMアカウント情報',
        path: '/path1',
      },
      {
        id: 2,
        icon: 'https://navismithapis-cdn.com/img/premium.svg',
        content: 'DMMプレミアムマイページ',
        path: '/path2',
      },
      {
        id: 3,
        icon: 'https://navismithapis-cdn.com/img/payment.svg',
        content: 'クレジットカード情報',
        path: '/path3',
      },
      {
        id: 4,
        icon: 'https://navismithapis-cdn.com/img/point.svg',
        content: 'DMMポイント',
      },
      {
        id: 5,
        icon: 'https://navismithapis-cdn.com/img/point_exchange.svg',
        content: 'ポイント交換',
      },
      {
        id: 6,
        icon: 'https://navismithapis-cdn.com/img/notification.svg',
        content: '通知設定',
      },
      {
        id: 7,
        content: 'サービス利用情報',
        path: '/path4',
      },
      {
        id: 8,
        content: 'ヘルプセンター',
        path: '/path5',
      },
    ],
  },
];

const TopHeader: FC = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <TopHeaderStyle>
      <LeftTopHeader>
        <ImageIcon src="https://navismithapis-cdn.com/img/service.svg" alt="iconMenu" />

        <ImageLogo src="https://p-smith.com/logo/clinic_com.svg" alt="logo" onClick={handleGoHome} />
      </LeftTopHeader>

      <RightTopHeader>
        {listPropsIcon.length && listPropsIcon.map((icons) => <IconHeader {...icons} key={icons.id} />)}
      </RightTopHeader>
    </TopHeaderStyle>
  );
};
export default TopHeader;
