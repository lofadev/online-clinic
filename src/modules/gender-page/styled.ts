import styled from 'styled-components';
import { ArrowButton, Button } from 'components';
import { IconArrow } from 'assets/icons/icon-button';
import { PropsGenderPage } from '.';

export const GenderPageStyle = styled.div`
  background-size: cover;

  &.page-male {
    background-image: url('https://clinic.dmm.com/images/gender/male/background.svg');
    background-color: #61b3ef;
  }

  &.page-female {
    background-image: url('https://clinic.dmm.com/images/gender/female/background.svg');
    background-color: #fb8f8f;
  }
`;

export const MedicalSubjectStyle = styled.div`
  background-color: #ffffff;
  border-radius: 20px 0px 0px 20px;
  padding-inline: 82px;
  margin-left: 50px;
  margin-top: 20px;
`;

export const TitleChildren = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #3f4f5f;
  text-align: center;
  margin-top: 32px;
`;

export const MainContentSubject = styled.div``;

export const ListSiekteGender = styled.div`
  display: flex;
  margin-top: 24px;
  margin-inline: 100px;
  flex-wrap: wrap;
  justify-content: start;
`;

export const SiekteGeneralBox = styled.div<PropsGenderPage>`
  display: flex;
  background-color: ${(props) => (props.gender === 'male' ? '#e5ecf6' : '#feecec')};
  border-radius: 0 20px 20px 0;
  margin-right: 50px;
  margin-top: -40px;
  padding: 35px 150px;
  justify-content: space-between;
`;

export const ContentSiekteBox = styled.div<PropsGenderPage>`
  width: 26px;
  margin-block: auto;
  text-align: center;
  margin-right: 35px;
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => (props.gender === 'male' ? '#1651b0' : '#f35f71')};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

export const ListGeneralSiekte = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 16px 32px;
`;

export const MedicalQueryBox = styled.div``;

export const ContentMedicalQuery = styled.div`
  margin-top: 30px;
`;

export const FeatureBoxStyle = styled.div<PropsGenderPage>`
  background-color: ${(prop) => (prop.gender === 'male' ? ' #e5ecf6' : '#feecec')};
  width: 70vw;
  border-radius: 20px;
  margin-inline: auto;
`;

export const FeatureIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 12%;
  margin-top: 82px;
`;

export const BottomFeature = styled.div``;

export const ContentBottomFeature = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 24px;
`;

export const ContentFeature = styled.div`
  background-color: #ffffff;
  padding-inline: 24px;
`;

export const ImageFeature = styled.img`
  height: 310px;
`;

export const DetailContent = styled.div<PropsGenderPage>`
  display: flex;
  border-bottom: 1px solid;
  border-color: ${(props) => (props.gender === 'male' ? '#1651b066' : '#f35f7166')};

  &.none-underline {
    border: none;
  }
  padding-block: 16px;
`;

export const IconBox = styled.div<PropsGenderPage>`
  background-color: ${(props) => (props.gender === 'male' ? '#e5ecf6' : '#feecec')};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 16px;
  margin-block: auto;
`;

export const IconLogo = styled.img`
  width: 34px;
  height: 34px;
  margin-inline: auto;
  margin-top: 8px;
`;

export const ContentBox = styled.div`
  color: #3f4f5f;
`;

export const TitleText = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

export const TitleTextFirst = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;

export const SubText = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

export const ButtonStyle = styled(Button)`
  width: 400px;
  justify-content: end;

  &.ant-btn-primary {
    height: 68px;
  }
`;

export const ContentButtonAppoint = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 70px;
  font-size: 26px;
  font-weight: 700;
  margin-block: auto;
`;

export const IconAppointementStyle = styled.div`
  padding-top: 8px;
`;
export const IconArrowStyle = styled(IconArrow)`
  width: 10px;
`;

export const ButtonAppointBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const StaffRecommendBox = styled.div``;

export const FlowBox = styled.div<PropsGenderPage>`
  background-color: ${(props) => (props.gender === 'male' ? '#e5ecf6' : '#feecec')};
`;

export const ContentFlowBox = styled.div`
  width: 100vw;
`;

export const FlowTop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const TitleVideo = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #3f4f5f;
  text-align: center;
  line-height: 30px;
  margin-top: 14px;
  margin-bottom: 22px;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonManualContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
  margin-bottom: 64px;
`;

export const ButtonManualStyle = styled(ArrowButton)`
  width: 240px;
`;

export const IconArrowManButton = styled.div``;
