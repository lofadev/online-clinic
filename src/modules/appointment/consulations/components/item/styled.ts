import { Button } from 'components';
import styled from 'styled-components';

export const TextBlockStyled = styled.div`
  display: flex;
  flex-direction: column;

  h1.ant-typography {
    margin-top: 5px;
  }
`;

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px dashed ${({ theme }) => theme.lightGray};
`;

export const ButtonStyled = styled(Button)`
  border: 1px solid ${({ theme }) => theme.lightGray};
`;

export const ButtonWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .btn-faq {
    width: 150px;
  }
`;

export const TextDangerStyled = styled.span`
  display: inline-block;
  margin-top: 5px;
  color: ${({ theme }) => theme.textDanger};
  font-size: 12px;
  font-weight: 700;
`;
