import { FC } from 'react';

import { FeatureFemale, FeatureMale } from 'assets/images/feature-gender';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import {
  ContentBottomFeature,
  ContentFeature,
  ImageFeature,
  DetailContent,
  IconBox,
  IconLogo,
  ContentBox,
  TitleText,
  SubText,
  TitleTextFirst,
} from './styled';

export type PropsGenderFeature = {
  gender: 'male' | 'female';
};

const FeatureContent: FC<PropsGenderFeature> = (props) => {
  const { t } = useTranslation();
  const { genderPage } = translations;

  const { gender } = props;
  return (
    <ContentBottomFeature>
      <ContentFeature>
        <DetailContent {...props}>
          <IconBox {...props}>
            <IconLogo
              src={
                gender === 'male'
                  ? 'https://clinic.dmm.com/images/gender/male/icon_feature4points_stethoscope.svg'
                  : 'https://clinic.dmm.com/images/gender/female/icon_feature4points_stethoscope.svg'
              }
              alt="icon"
            />
          </IconBox>

          <ContentBox>
            <TitleTextFirst>{t(genderPage.Feature.contentbox)}</TitleTextFirst>

            <TitleText>{t(genderPage.Feature.titleMiddle)}</TitleText>

            <SubText>{t(genderPage.Feature.titleBottom)}</SubText>
          </ContentBox>
        </DetailContent>

        <DetailContent {...props}>
          <IconBox {...props}>
            <IconLogo
              src={
                gender === 'male'
                  ? 'https://clinic.dmm.com/images/gender/male/icon_feature4points_note.svg'
                  : 'https://clinic.dmm.com/images/gender/female/icon_feature4points_note.svg'
              }
              alt="icon"
            />
          </IconBox>

          <ContentBox>
            {gender === 'male' ? (
              <TitleText>{t(genderPage.Feature.contentbox2)}</TitleText>
            ) : (
              <>
                <TitleText>{t(genderPage.Feature.titleMiddle2)}</TitleText>

                <TitleText>{t(genderPage.Feature.titleBottom2)}</TitleText>
              </>
            )}
            <TitleText>{t(genderPage.Feature.titleBottom3)}</TitleText>
          </ContentBox>
        </DetailContent>

        <DetailContent className="none-underline" {...props}>
          <IconBox {...props}>
            <IconLogo
              src={
                gender === 'male'
                  ? 'https://clinic.dmm.com/images/gender/male/icon_feature4points_time.svg'
                  : 'https://clinic.dmm.com/images/gender/female/icon_feature4points_time.svg'
              }
              alt="icon"
            />
          </IconBox>

          <ContentBox>
            <TitleText>{t(genderPage.Feature.contentbox3)}</TitleText>

            <TitleText>{t(genderPage.Feature.titleBottom3)}</TitleText>
          </ContentBox>
        </DetailContent>
      </ContentFeature>

      <ImageFeature src={gender === 'male' ? FeatureMale : FeatureFemale} alt="picture" />
    </ContentBottomFeature>
  );
};
export default FeatureContent;
