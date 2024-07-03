import styled from 'styled-components';
import { EvoBanner } from 'assets';

export const EvoBannerStyled = styled.div`
  background-color: ${({ theme }) => theme.primaryLight};
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 40%;
  background-image: url(${EvoBanner});
`;
