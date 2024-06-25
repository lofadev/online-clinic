import styled from 'styled-components';

export const MedicalSubjectStyle = styled.div`
  margin: 20px;
  width: 241px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;
  }
`;

export const ImageStyle = styled.img`
  border-radius: 4px;
  border: 1px ${({ theme }) => theme.lightGray} solid;
`;

export const TitleSubject = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-block: 12px;
`;

export const ContentSubject = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #a6a7b5;
`;

export const TilteText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 30px;
`;

export const TitleIcon = styled.div`
  line-height: 30px;
`;
