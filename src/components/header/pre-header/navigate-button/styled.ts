import styled from 'styled-components';

export const NavigateButtonStyle = styled.div`
  &:hover {
    cursor: pointer;
    border-bottom: 5px solid ${({ theme }) => theme.primary};
    & > .sub-header {
      display: flex;
    }

    /* {
      color: ${({ theme }) => theme.primary};
    } */
  }
`;
export const ContentButtonNavigate = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  height: 50px;
  line-height: 20px;
  padding: 15px;
`;
