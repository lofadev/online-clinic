import styled from 'styled-components';

export const TopFooterStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageStyle = styled.img`
  margin-inline: 32px;
`;

export const ContentTopFooter = styled.div`
  width: 476px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 18px;
  padding: 15px 33px;
  border-left: 1px solid ${({ theme }) => theme.lightGray};
`;
