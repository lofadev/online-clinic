import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import BannerGender from 'components/page/banner-gender';
import ArticleBlock from 'components/article-block/ArticleBlock';
import MedicalSubject from 'components/page/medical-subject';
import IconSiekte from 'components/page/siekte';
import { MedicalQueries } from 'components/medicalqueries';
import IconFeature from 'components/page/feature';
import { IconAppointement } from 'assets/icons/icon-button';
import { useHistory } from 'react-router-dom';
import { CardSlider } from 'components/slider';
import FlowItem from 'components/page/flow';
import { Video } from 'components/videocustom';

import { IService } from 'types/service';
import { useServicesSlice } from 'slices/services';
import {
  BottomFeature,
  ButtonAppointBox,
  ButtonManualContainer,
  ButtonManualStyle,
  ButtonStyle,
  ContentButtonAppoint,
  ContentFlowBox,
  ContentMedicalQuery,
  ContentSiekteBox,
  FeatureBoxStyle,
  FeatureIconBox,
  FlowBox,
  FlowTop,
  GenderPageStyle,
  IconAppointementStyle,
  IconArrowStyle,
  ListGeneralSiekte,
  ListSiekteGender,
  MainContentSubject,
  MedicalQueryBox,
  MedicalSubjectStyle,
  SiekteGeneralBox,
  StaffRecommendBox,
  TitleChildren,
  TitleVideo,
  VideoContainer,
} from './styled';

import {
  dataMedicalQueryFemale,
  dataMedicalQueryMale,
  dataSlideStaffRecommend,
  listDataFeature,
  listDataFlow,
} from './constant';

import FeatureContent from './FeatuteContent';

export type PropsGenderPage = {
  gender: GenderType;
};

export const GenderPage: React.FC<PropsGenderPage> = (props) => {
  const { gender } = props;
  const [dataServices, setDataServices] = useState<IService[]>([]);
  const { fetchServices, serviceList, medicalSubjectList } = useServicesSlice();
  const [medicalSubjectData, setMedicalSubjectData] = useState<IService[]>([]);
  const listDataFeatureGender = listDataFeature.filter((item) => item.gender === gender);
  const listDataFlowGender = listDataFlow.filter((item) => item.gender === gender);

  const history = useHistory();
  const handleAppointement = () => {
    history.push('/appointment');
  };

  const handleClickUsage = () => {
    history.push('/usage');
  };

  useEffect(() => {
    const fetchDataServices = () => {
      if (gender === 'male') {
        fetchServices('FOR_MALE');
      } else {
        fetchServices('FOR_FEMALE');
      }
    };
    fetchDataServices();
  }, [gender]);

  useEffect(() => {
    if (serviceList) {
      setDataServices(serviceList);
      setMedicalSubjectData(medicalSubjectList);
    }
  }, [serviceList, medicalSubjectList]);

  return (
    <>
      <Helmet>
        <title>Gender Page</title>
        <meta name="description" content="Gender Page" />
      </Helmet>

      <GenderPageStyle className={`page-${gender}`}>
        <BannerGender gender={gender} />

        <MedicalSubjectStyle>
          <ArticleBlock
            title="オンライン診療一覧"
            desc="Medical subjects"
            descStyles={{
              fontFamily: 'DAMION',
              fontSize: 'SIZE_24',
              color: `${gender}` === 'male' ? 'maleColor' : 'femaleColor',
            }}
          >
            <MainContentSubject>
              <TitleChildren>DMMオンラインクリニックで受診できる診療内容</TitleChildren>

              <ListSiekteGender>
                {medicalSubjectData.length &&
                  medicalSubjectData.map((data) => (
                    <MedicalSubject
                      id={data.id}
                      picture={data.image}
                      title={data.name}
                      content="成人男性の多くが抱える悩み"
                      path={`/menu/${data.id}`}
                    />
                  ))}
              </ListSiekteGender>
            </MainContentSubject>
          </ArticleBlock>
        </MedicalSubjectStyle>

        <SiekteGeneralBox {...props}>
          <ContentSiekteBox {...props}>共通診療科目</ContentSiekteBox>
          <ListGeneralSiekte>
            {dataServices.length &&
              dataServices.map((data) => (
                <IconSiekte
                  icon={data.icon}
                  content={data.name}
                  gender={data.type}
                  id={data.id}
                  path={`/menu/${data.id}`}
                />
              ))}
          </ListGeneralSiekte>
        </SiekteGeneralBox>

        <MedicalQueryBox>
          <ArticleBlock
            title={gender === 'male' ? '男性のための' : '女性のための'}
            desc={gender === 'male' ? 'For men' : 'For women'}
            descStyles={{
              fontSize: 'SIZE_24',
              fontWeight: 'FW_400',
              color: 'white',
              fontFamily: 'DAMION',
            }}
            titleStyles={{
              background: gender === 'male' ? 'maleColor' : 'femaleColor',
              color: 'white',
            }}
            subTitle="DMMオンラインクリニック"
          >
            <ContentMedicalQuery>
              <MedicalQueries
                data={gender === 'male' ? dataMedicalQueryMale : dataMedicalQueryFemale}
                gender={gender === 'male'}
              />
            </ContentMedicalQuery>
          </ArticleBlock>
        </MedicalQueryBox>

        <FeatureBoxStyle {...props}>
          <ArticleBlock
            title="当院の特徴"
            desc="Feature"
            descStyles={{
              fontSize: 'SIZE_24',
              fontWeight: 'FW_400',
              fontFamily: 'DAMION',
              color: `${gender}` === 'male' ? 'maleColor' : 'femaleColor',
            }}
          >
            <FeatureIconBox>
              {listDataFeatureGender.length &&
                listDataFeatureGender.map((data) => (
                  <IconFeature id={data.id} icon={data.icon} content={data.content} gender={data.gender} />
                ))}
            </FeatureIconBox>

            <BottomFeature>
              <FeatureContent gender={gender} />
            </BottomFeature>

            <ButtonAppointBox>
              <ButtonStyle type="primary" color="secondary" onClick={handleAppointement}>
                <ContentButtonAppoint>
                  <IconAppointementStyle>
                    <IconAppointement />
                  </IconAppointementStyle>
                  診療予約をする
                </ContentButtonAppoint>
                <IconArrowStyle />
              </ButtonStyle>
            </ButtonAppointBox>
          </ArticleBlock>
        </FeatureBoxStyle>

        <StaffRecommendBox>
          <ArticleBlock
            title="スタッフのおすすめポイント"
            desc="Staff recommendations"
            descStyles={{
              fontSize: 'SIZE_24',
              fontWeight: 'FW_400',
              color: 'white',
              fontFamily: 'DAMION',
            }}
            titleStyles={{
              background: gender === 'male' ? 'maleColor' : 'femaleColor',
              color: 'white',
            }}
          >
            <CardSlider data={dataSlideStaffRecommend} gender={gender} />
          </ArticleBlock>
        </StaffRecommendBox>

        <FlowBox {...props}>
          <ArticleBlock
            title="オンライン診療の流れ"
            desc="Flow"
            descStyles={{
              fontSize: 'SIZE_24',
              fontWeight: 'FW_400',
              fontFamily: 'DAMION',
              color: `${gender}` === 'male' ? 'maleColor' : 'femaleColor',
            }}
          >
            <ContentFlowBox>
              <FlowTop>{listDataFlowGender.length && listDataFlowGender.map((data) => <FlowItem {...data} />)}</FlowTop>

              <TitleVideo>テレビCMで流れを知る</TitleVideo>

              <VideoContainer>
                <Video
                  data={{
                    src:
                      gender === 'female'
                        ? 'https://player.vimeo.com/video/759362497?h=c0f36cf6a7'
                        : 'https://player.vimeo.com/video/759362478?h=8586efcae4',
                    width: 719,
                    height: 414,
                  }}
                />
              </VideoContainer>

              <ButtonManualContainer>
                <ButtonManualStyle
                  className="btn-manual"
                  type="default"
                  color={gender === 'male' ? 'secondary' : 'tertiary'}
                  size="small"
                  onClick={handleClickUsage}
                >
                  詳しい使い方はこちら
                </ButtonManualStyle>
              </ButtonManualContainer>
              <ButtonAppointBox>
                <ButtonStyle type="primary" color="secondary" onClick={handleAppointement}>
                  <ContentButtonAppoint>
                    <IconAppointementStyle>
                      <IconAppointement />
                    </IconAppointementStyle>
                    診療予約をする
                  </ContentButtonAppoint>
                  <IconArrowStyle />
                </ButtonStyle>
              </ButtonAppointBox>
            </ContentFlowBox>
          </ArticleBlock>
        </FlowBox>
      </GenderPageStyle>
    </>
  );
};
