import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'antd';
import {
  ButtonGender,
  SubHeaderStyle,
  ButtonStyleGender,
  ContentButton,
  ImageStyle,
  ArrowImage,
  DetailNavigateBox,
  TitleDetailNav,
} from './style';
import DetailNavigate, { PropsDetailNavigate } from '../detail-navigate';

const listDataDetailNavigate: PropsDetailNavigate[] = [
  {
    id: 1,
    content: '男性AGA',
    path: '/path1',
  },
  {
    id: 2,
    content: '女性AGA',
    path: '/path2',
  },
  {
    id: 3,
    content: 'ED・早漏防止',
    path: '/path3',
  },
  {
    id: 4,
    content: 'メディカルダイエット・肥満症',
    path: '/path4',
  },
  {
    id: 5,
    content: '飲む日焼け止め',
    path: '/path5',
  },
  {
    id: 6,
    content: 'メディカルアイラッシュ',
    path: '/path6',
  },
  {
    id: 7,
    content: '不眠症・睡眠障害',
    path: '/path7',
  },
  {
    id: 8,
    content: 'インフルエンザ予防',
    path: '/path8',
  },
  {
    id: 9,
    content: '性感染症',
    path: '/path9',
  },
  {
    id: 10,
    content: '花粉症',
    path: '/path10',
  },
  {
    id: 11,
    content: 'メディカルスキンケア',
    path: '/path11',
  },
  {
    id: 12,
    content: 'ドクターズコスメ',
    path: '/path12',
  },
  {
    id: 13,
    content: 'ピル',
    path: '/path13',
  },
  {
    id: 14,
    content: 'アフターピル',
    path: '/path14',
  },
  {
    id: 15,
    content: '生活習慣病',
    path: '/path15',
    disable: true,
  },
];
const SubHeader: FC = () => {
  const history = useHistory();
  const handleSelect = (url: string) => {
    history.push(url);
  };
  return (
    <SubHeaderStyle className="sub-header">
      <ButtonGender>
        <ButtonStyleGender
          className="male"
          onClick={() => {
            handleSelect('/malepage');
          }}
        >
          <ContentButton>男性向け</ContentButton>

          <ArrowImage src="https://clinic.dmm.com/img/icon/ico_arrow_male.svg?id=17be271df2b95590a5b7" alt="arrow" />

          <ImageStyle src="https://clinic.dmm.com/images/common/pic_doctor_male.svg" alt="picture" />
        </ButtonStyleGender>

        <ButtonStyleGender
          className="female"
          onClick={() => {
            handleSelect('/femalepage');
          }}
        >
          <ContentButton>女性向け</ContentButton>

          <ArrowImage src="https://clinic.dmm.com/img/icon/ico_arrow_female.svg?id=ab1ad417f9d57e86cc7c" alt="arrow" />

          <ImageStyle
            src="https://clinic.dmm.com/img/pc/top/pic_doctor_female.svg?id=79f2f1bbb2fe0e05fa6d"
            alt="picture"
          />
        </ButtonStyleGender>
      </ButtonGender>
      <DetailNavigateBox>
        <TitleDetailNav>診療内容一覧</TitleDetailNav>
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
