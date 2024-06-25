import { FC } from 'react';

import { Account, Booking, Shopping } from 'assets/icons/icon-header';
import { useHistory } from 'react-router-dom';
import {
  ButtonGroup,
  ButtonShopping,
  ContainerPage,
  ContentButtonShopping,
  NavigateGroup,
  PreHeaderStyle,
  ButtonBooking,
  ContentButtonBooking,
  ButtonAccount,
  ContentButtonAccount,
} from './style';
import NavigateButton, { PropsNavigateButton } from './navigate-button';
import SubHeader from './sub-header';

const listDataNavigateButton: PropsNavigateButton[] = [
  {
    id: 1,
    content: 'TOP',
    path: '/path1',
  },
  {
    id: 2,
    content: '診療内容',
    children: <SubHeader />,
  },
  {
    id: 3,
    content: 'DMMクリニックとは',
    path: '/path3',
  },
  {
    id: 4,
    content: 'サービスの使い方',
    path: '/path4',
  },
  {
    id: 5,
    content: 'よくある質問',
    path: '/path5',
  },
  {
    id: 6,
    content: 'Dr.コラム',
    path: '/path6',
  },
];
const PreHeader: FC = () => {
  const history = useHistory();
  const handleClick = (url: string) => {
    history.push(url);
  };
  return (
    <PreHeaderStyle>
      <ContainerPage>
        <NavigateGroup>
          {listDataNavigateButton.length &&
            listDataNavigateButton.map((data) => <NavigateButton key={data.id} {...data} />)}
        </NavigateGroup>

        <ButtonGroup>
          <ButtonShopping color="primary" size="small" onClick={() => handleClick('/shopping')}>
            <Shopping className="svg" />

            <ContentButtonShopping> ショップ</ContentButtonShopping>
          </ButtonShopping>

          <ButtonBooking type="primary" color="secondary" size="small" onClick={() => handleClick('/booking')}>
            <Booking />

            <ContentButtonBooking>診療予約</ContentButtonBooking>
          </ButtonBooking>

          <ButtonAccount type="primary" color="quaternary" size="small" onClick={() => handleClick('/account')}>
            <Account />
            <ContentButtonAccount>マイページ</ContentButtonAccount>
          </ButtonAccount>
        </ButtonGroup>
      </ContainerPage>
    </PreHeaderStyle>
  );
};

export default PreHeader;
