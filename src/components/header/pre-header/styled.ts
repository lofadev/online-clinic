import styled from 'styled-components';
import { Button } from 'components';

export const PreHeaderStyle = styled.div``;

export const ContainerPage = styled.div`
  width: 70vw;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const NavigateGroup = styled.div`
  display: flex;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;
export const ContentButtonShopping = styled.div`
  font-size: 10px;
  font-weight: 700;
`;
export const ButtonShopping = styled(Button)`
  display: flex;
  height: 40px;
  width: 64px;
  flex-direction: column;
  margin-block: auto;
  &.svg {
    height: 21px;
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.white};
      transition: all 0.2s linear;
    }
  }
`;
export const ButtonBooking = styled(Button)`
  height: 40px;
  width: 128px;
  margin-block: auto;
`;
export const ContentButtonBooking = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding-inline: 5px;
`;
export const ButtonAccount = styled(Button)`
  width: 128px;
  margin-block: auto;
`;
export const ContentButtonAccount = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding-inline: 5px;
`;
