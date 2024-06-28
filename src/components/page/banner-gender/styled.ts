import styled from 'styled-components';

export const BannerGenderStyle = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  height: 390px;
  gap: 18px;
  padding-top: 20px;
`;
export const LeftBanner = styled.div`
  width: 472px;
`;
export const RightBanner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 530px;
  position: relative;
`;
export const TitleBanner = styled.div`
  margin-bottom: 50px;
`;
export const TextTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  line-height: 54px;
  margin-bottom: 6px;
`;
export const ImageTitle = styled.img`
  width: 450px;
  height: 38px;
`;
export const IconBannerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IconFeatureBanner = styled.div<{ gender: GenderType }>`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: ${(props) => (props.gender === 'male' ? '#1651B0' : '#F35F71')};
`;
export const IconStyled = styled.img`
  height: 53px;
  width: 80px;
  margin-inline: auto;
  margin-top: 16px;
`;
export const TextIconFeature = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  line-height: 22px;
  max-width: 96px;
  text-align: center;
  margin-inline: auto;
  margin-top: 10px;
`;
export const TextRightBanner = styled.div`
  display: flex;
  gap: 12px;
`;
export const TextDetail = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #3f4f5f;
  width: 45px;
  background-color: #ffffff;
  padding: 10px;
  height: fit-content;
  z-index: 2;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
export const ImageRightBanner = styled.div``;
export const TopImage = styled.img`
  height: 270px;
  width: 396px;
  border-radius: 12px;
  position: absolute;
  top: 24px;
  left: 0px;
`;
export const BottomImage = styled.img`
  height: 172px;
  width: 254px;
  border-radius: 12px;
  position: absolute;
  bottom: 0px;
  right: 0;
`;
