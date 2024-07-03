import { Title } from 'components';
import styled from 'styled-components';

export const AppoinmentStyled = styled.div`
  .block-2 {
    margin-top: 24px;
  }
`;

export const TitleHeadStyled = styled(Title.Primary)`
  display: block;
`;

export const TextWrapperStyled = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const NoteStyled = styled(Title.Primary)`
  &.ant-typography {
    display: block;
    margin-top: 24px;
    margin-bottom: 16px;
  }
`;

export const ExamMenuStyled = styled.div`
  margin-bottom: 20px;
`;

export const ExamItemStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const BannerStyled = styled.div``;

export const ImgStyled = styled.img`
  margin-top: 16px;
`;

export const LoadingStyled = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
