import styled from 'styled-components';

export const DetailNavigateStyles = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  width: 200px;

  &.disable {
    opacity: 0.3;
    &:hover {
      color: ${({ theme }) => theme.textPrimary};
      cursor: default;
    }
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }
`;
export const ContentDetailNav = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 33px;
`;
export const ImageStyle = styled.img`
  height: 12px;
  width: 12px;
  margin-block: auto;
`;
