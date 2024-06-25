import styled from 'styled-components';

export const AppointmentStyle = styled.div`
  width: 940px;
  height: 240px;
  display: flex;
  margin: 20px;
`;

export const PictureApp = styled.div``;

export const ImageStyle = styled.img`
  width: 420px;
  height: 240px;
`;

export const MainContentApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  margin-left: 30px;
`;

export const Step = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.textPrimary};
  padding: 0 8px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
`;

export const TitleAppointment = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  margin-left: 8px;
`;

export const StepTitle = styled.div`
  display: flex;
`;
