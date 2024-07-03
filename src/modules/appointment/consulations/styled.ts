import { Button } from 'components';
import styled from 'styled-components';

export const TextBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  border: 1px solid ${({ theme }) => theme.lightGray};
`;
