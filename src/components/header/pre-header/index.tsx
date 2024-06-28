import { FC } from 'react';

import { Account, Booking, Shopping } from 'assets/icons/icon-header';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
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

const PreHeader: FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { header } = translations;

  const listDataNavigateButton: PropsNavigateButton[] = [
    {
      id: 1,
      content: t(header.navigation.top),
      path: '/path1',
    },
    {
      id: 2,
      content: t(header.navigation.consultation),
      children: <SubHeader />,
    },
    {
      id: 3,
      content: t(header.navigation.about_dmm),
      path: '/path3',
    },
    {
      id: 4,
      content: t(header.navigation.how_to_use),
      path: '/path4',
    },
    {
      id: 5,
      content: t(header.navigation.faq),
      path: '/path5',
    },
    {
      id: 6,
      content: t(header.navigation.dr_column),
      path: '/path6',
    },
  ];

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

            <ContentButtonShopping>{t(header.navigation.shop)}</ContentButtonShopping>
          </ButtonShopping>

          <ButtonBooking type="primary" color="secondary" size="small" onClick={() => handleClick('/booking')}>
            <Booking />

            <ContentButtonBooking>{t(header.navigation.appointment)}</ContentButtonBooking>
          </ButtonBooking>

          <ButtonAccount type="primary" color="quaternary" size="small" onClick={() => handleClick('/account')}>
            <Account />
            <ContentButtonAccount>{t(header.navigation.my_page)}</ContentButtonAccount>
          </ButtonAccount>
        </ButtonGroup>
      </ContainerPage>
    </PreHeaderStyle>
  );
};

export default PreHeader;
