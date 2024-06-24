import styled from 'styled-components';

export const MainFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e7e7e7;
  padding: 16px 25vw;
`;
export const DetailMainFooterStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleMainFooter = styled.div`
  font-size: 12px;
  line-height: 22px;
  font-weight: 300;
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: 1px dotted #bbbbbb;
`;

export const ContentMainFooter = styled.div``;

export const TextContent = styled.div`
  line-height: 19px;
  font-size: 12px;
  font-weight: 300;
  color: #005fc0;
  margin-block: 9px;

  &:hover {
    cursor: pointer;
    color: #e20;
    text-decoration: underline;
  }
`;

export const SubContent = styled.div`
  font-size: 10px;
  font-weight: 300;
  line-height: 15px;
  color: #666666;
`;
