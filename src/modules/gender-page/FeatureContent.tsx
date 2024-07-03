import { FC } from 'react';

import { FeatureFemale, FeatureMale } from 'assets/images/feature-gender';
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
            <TitleTextFirst>オンライン診療受付時間</TitleTextFirst>

            <TitleText>24時間対応</TitleText>

            <SubText>※年末年始を除く</SubText>
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
              <TitleText>ダイエット、男性AGA、ED・早漏防止</TitleText>
            ) : (
              <>
                <TitleText>ダイエット、漢方、ピル、女性AGA、</TitleText>

                <TitleText>アフターピル、メディカルアイラッシュ</TitleText>
              </>
            )}
            <TitleText>などの診療科目に対応</TitleText>
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
            <TitleText>予約・問診票記入・診療まで</TitleText>

            <TitleText>全てオンラインで可能</TitleText>
          </ContentBox>
        </DetailContent>
      </ContentFeature>

      <ImageFeature src={gender === 'male' ? FeatureMale : FeatureFemale} alt="picture" />
    </ContentBottomFeature>
  );
};
export default FeatureContent;
