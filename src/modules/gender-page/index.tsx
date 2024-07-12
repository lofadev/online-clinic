import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { IconAppointement } from 'assets/icons/icon-button';
import ArticleBlock from 'components/article-block/ArticleBlock';
import { MedicalQueries } from 'components/medicalqueries';
import BannerGender from 'components/page/banner-gender';
import IconFeature from 'components/page/feature';
import FlowItem from 'components/page/flow';
import MedicalSubject from 'components/page/medical-subject';
import IconSiekte from 'components/page/siekte';
import { CardSlider } from 'components/slider';
import { Video } from 'components/videocustom';

import history from 'configs/history';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import RoutesName from 'routes/constant';
import { useServicesSlice } from 'slices/services';
import { IService } from 'types/service';
import FeatureContent from './FeatureContent';
import {
  dataMedicalQueryFemale,
  dataMedicalQueryMale,
  dataSlideStaffRecommend,
  listDataFeature,
  listDataFlow,
} from './constant';
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

  const { t } = useTranslation();
  const { genderPage } = translations;

  const handleAppointement = () => {
    history.push(RoutesName.APPOINTMENT.INDEX);
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
                      key={data.id}
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
          <ContentSiekteBox {...props}>{t(genderPage.ContentSiekteBox)}</ContentSiekteBox>
          <ListGeneralSiekte>
            {dataServices.length &&
              dataServices.map((data) => (
                <IconSiekte
                  icon={data.icon}
                  content={data.name}
                  gender={data.type}
                  id={data.id}
                  key={data.id}
                  path={`/menu/${data.id}`}
                />
              ))}
          </ListGeneralSiekte>
        </SiekteGeneralBox>

        <MedicalQueryBox>
          <ArticleBlock
            title={
              gender === 'male' ? t(genderPage.bannerGender.TextTitle.male) : t(genderPage.bannerGender.TextTitle.male)
            }
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
            title={t(genderPage.ArticleBlock.title)}
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
                  <IconFeature
                    id={data.id}
                    icon={data.icon}
                    content={t(data.content)}
                    gender={data.gender}
                    key={data.id}
                  />
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
                  {t(genderPage.ArticleBlock.btnAppoinrement)}
                </ContentButtonAppoint>
                <IconArrowStyle />
              </ButtonStyle>
            </ButtonAppointBox>
          </ArticleBlock>
        </FeatureBoxStyle>

        <StaffRecommendBox>
          <ArticleBlock
            title={t(genderPage.ArticleBlock.titleStaff)}
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
            title={t(genderPage.ArticleBlock.titleFlow)}
            desc="Flow"
            descStyles={{
              fontSize: 'SIZE_24',
              fontWeight: 'FW_400',
              fontFamily: 'DAMION',
              color: `${gender}` === 'male' ? 'maleColor' : 'femaleColor',
            }}
          >
            <ContentFlowBox>
              <FlowTop>
                {listDataFlowGender.length &&
                  listDataFlowGender.map((data) => <FlowItem key={data.id} {...data} title={t(data.title)} />)}
              </FlowTop>

              <TitleVideo>{t(genderPage.ArticleBlock.titleVideo)}</TitleVideo>

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
                  {t(genderPage.ArticleBlock.btnManual)}
                </ButtonManualStyle>
              </ButtonManualContainer>
              <ButtonAppointBox>
                <ButtonStyle type="primary" color="secondary" onClick={handleAppointement}>
                  <ContentButtonAppoint>
                    <IconAppointementStyle>
                      <IconAppointement />
                    </IconAppointementStyle>
                    {t(genderPage.ArticleBlock.btnAppoinrement)}
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
