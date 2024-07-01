import { FC } from 'react';
import {
  BannerBottomRightFemale,
  BannerBottomRightMale,
  BannerTopRightFemale,
  BannerTopRightMale,
} from 'assets/images/banner-gender';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import {
  BannerGenderStyle,
  BottomImage,
  IconBannerBox,
  IconFeatureBanner,
  IconStyled,
  ImageRightBanner,
  ImageTitle,
  LeftBanner,
  RightBanner,
  TextDetail,
  TextIconFeature,
  TextRightBanner,
  TextTitle,
  TitleBanner,
  TopImage,
} from './styled';

export type PropsBannerGender = {
  gender: 'male' | 'female';
};
const BannerGender: FC<PropsBannerGender> = (props) => {
  const { t } = useTranslation();
  const { genderPage } = translations;

  const { gender } = props;
  return (
    <BannerGenderStyle className={gender}>
      <LeftBanner>
        <TitleBanner>
          <TextTitle>
            {gender === 'male'
              ? t(genderPage.bannerGender.TextTitle.male)
              : t(genderPage.bannerGender.TextTitle.female)}
          </TextTitle>

          <ImageTitle src="https://clinic.dmm.com/images/gender/pic_dmm-online-clinic_logo.svg" alt="titleImg" />
        </TitleBanner>

        <IconBannerBox>
          <IconFeatureBanner {...props}>
            <IconStyled src="https://clinic.dmm.com/images/gender/icon_feature-point_truck.svg" alt="icon" />
            <TextIconFeature>{t(genderPage.bannerGender.TextIconFeature.delivery)}</TextIconFeature>
          </IconFeatureBanner>

          <IconFeatureBanner {...props}>
            <IconStyled src="https://clinic.dmm.com/images/gender/icon_feature-point_price.svg" alt="icon" />
            <TextIconFeature>{t(genderPage.bannerGender.TextIconFeature.cost)}</TextIconFeature>
          </IconFeatureBanner>

          <IconFeatureBanner {...props}>
            <IconStyled src="https://clinic.dmm.com/images/gender/icon_feature-point_phone.svg" alt="icon" />
            <TextIconFeature>{t(genderPage.bannerGender.TextIconFeature.phone)}</TextIconFeature>
          </IconFeatureBanner>
        </IconBannerBox>
      </LeftBanner>

      <RightBanner>
        <TextRightBanner>
          <TextDetail>{t(genderPage.bannerGender.TextDetail.Medication)}</TextDetail>

          <TextDetail>{t(genderPage.bannerGender.TextDetail.Formulated)}</TextDetail>

          <TextDetail>{t(genderPage.bannerGender.TextDetail.Examination)}</TextDetail>
        </TextRightBanner>

        <ImageRightBanner>
          <TopImage src={gender === 'male' ? BannerTopRightMale : BannerTopRightFemale} alt="picture" />

          <BottomImage src={gender === 'male' ? BannerBottomRightMale : BannerBottomRightFemale} alt="picture" />
        </ImageRightBanner>
      </RightBanner>
    </BannerGenderStyle>
  );
};
export default BannerGender;
