import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import {
  ButtonGender,
  SubHeaderStyle,
  ButtonStyleGender,
  ContentButton,
  ImageStyle,
  ArrowImage,
  DetailNavigateBox,
  TitleDetailNav,
} from './styled';
import DetailNavigate, { PropsDetailNavigate } from '../detail-navigate';

const SubHeader: FC = () => {
  const history = useHistory();
  const handleSelect = (url: string) => {
    history.push(url);
  };
  const { t } = useTranslation();
  const { header } = translations;

  const listDataDetailNavigate: PropsDetailNavigate[] = [
    {
      id: 1,
      content: t(header.subtile.male_aga),
      path: '/path1',
    },
    {
      id: 2,
      content: t(header.subtile.female_aga),
      path: '/path2',
    },
    {
      id: 3,
      content: t(header.subtile.ed_premature),
      path: '/path3',
    },
    {
      id: 4,
      content: t(header.subtile.diet_obesity),
      path: '/path4',
    },
    {
      id: 5,
      content: t(header.subtile.oral_sunscreen),
      path: '/path5',
    },
    {
      id: 6,
      content: t(header.subtile.eyelash),
      path: '/path6',
    },
    {
      id: 7,
      content: t(header.subtile.insomnia_sleep),
      path: '/path7',
    },
    {
      id: 8,
      content: t(header.subtile.influenza_prevention),
      path: '/path8',
    },
    {
      id: 9,
      content: t(header.subtile.std),
      path: '/path9',
    },
    {
      id: 10,
      content: t(header.subtile.hay_fever),
      path: '/path10',
    },
    {
      id: 11,
      content: t(header.subtile.skincare),
      path: '/path11',
    },
    {
      id: 12,
      content: t(header.subtile.doctors_cosmetics),
      path: '/path12',
    },
    {
      id: 13,
      content: t(header.subtile.pill),
      path: '/path13',
    },
    {
      id: 14,
      content: t(header.subtile.morning_after_pill),
      path: '/path14',
    },
    {
      id: 15,
      content: t(header.subtile.lifestyle_diseases),
      path: '/path15',
      disable: true,
    },
  ];

  return (
    <SubHeaderStyle className="sub-header">
      <ButtonGender>
        <ButtonStyleGender
          className="male"
          onClick={() => {
            handleSelect('/male');
          }}
        >
          <ContentButton>{t(header.subtile.male_text)}</ContentButton>

          <ArrowImage src="https://clinic.dmm.com/img/icon/ico_arrow_male.svg?id=17be271df2b95590a5b7" alt="arrow" />

          <ImageStyle src="https://clinic.dmm.com/images/common/pic_doctor_male.svg" alt="picture" />
        </ButtonStyleGender>

        <ButtonStyleGender
          className="female"
          onClick={() => {
            handleSelect('/female');
          }}
        >
          <ContentButton>{t(header.subtile.female_text)}</ContentButton>

          <ArrowImage src="https://clinic.dmm.com/img/icon/ico_arrow_female.svg?id=ab1ad417f9d57e86cc7c" alt="arrow" />

          <ImageStyle
            src="https://clinic.dmm.com/img/pc/top/pic_doctor_female.svg?id=79f2f1bbb2fe0e05fa6d"
            alt="picture"
          />
        </ButtonStyleGender>
      </ButtonGender>
      <DetailNavigateBox>
        <TitleDetailNav>{t(header.subtile.title)}</TitleDetailNav>
        <Row>
          {listDataDetailNavigate.length &&
            listDataDetailNavigate.map((data) => (
              <Col key={data.id} span={8}>
                <DetailNavigate {...data} />
              </Col>
            ))}
        </Row>
      </DetailNavigateBox>
    </SubHeaderStyle>
  );
};
export default SubHeader;
