import { FC } from 'react';

import { Account, Booking, Shopping } from 'assets/icons/icon-header';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import RoutesName from 'routes/constant';
// import i18next from 'i18next';
import i18next from 'i18next';
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
  SwitchStyled,
  SwitchChangeLanguage,
} from './styled';
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
      path: RoutesName.TOP,
    },
    {
      id: 2,
      content: t(header.navigation.consultation),
      children: <SubHeader />,
    },
    {
      id: 3,
      content: t(header.navigation.about_dmm),
      path: '/',
    },
    {
      id: 4,
      content: t(header.navigation.how_to_use),
      path: RoutesName.USAGE,
    },
    {
      id: 5,
      content: t(header.navigation.faq),
      path: RoutesName.FAQ,
    },
    {
      id: 6,
      content: t(header.navigation.dr_column),
      path: RoutesName.COLUMN,
    },
  ];

  const handleClick = (url: string) => {
    history.push(url);
  };
  const { i18n } = useTranslation();
  const changeLanguage = (value: boolean) => {
    if (value) {
      i18n.changeLanguage('jp');
    } else {
      i18n.changeLanguage('en');
    }
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

          <ButtonBooking type="primary" color="secondary" size="small" onClick={() => handleClick('/appointment')}>
            <Booking />

            <ContentButtonBooking>{t(header.navigation.appointment)}</ContentButtonBooking>
          </ButtonBooking>

          <ButtonAccount type="primary" color="quaternary" size="small" onClick={() => handleClick('/account')}>
            <Account />
            <ContentButtonAccount>{t(header.navigation.my_page)}</ContentButtonAccount>
          </ButtonAccount>

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
        </ButtonGroup>
      </ContainerPage>
    </PreHeaderStyle>
  );
};

export default PreHeader;
