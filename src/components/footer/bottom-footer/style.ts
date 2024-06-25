import styled from 'styled-components';

export const BottomFooterStyle = styled.div`
  background-color: #242424;
  color: ${({ theme }) => theme.white};
  padding: 15px 20vw;
`;

export const ContentBottomFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemContentBottomFooter = styled.a`
  font-size: 12px;
  font-weight: 300;
  border-left: 1px solid;
  padding-inline: 5px;
  margin-block: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CoppyRight = styled.div`
  font-size: 10px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
  margin-top: 10px;
`;

export const ItemContentBottomFooterNoneBorder = styled.a`
  font-size: 12px;
  font-weight: 300;
  padding-inline: 10px;
  margin-block: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
