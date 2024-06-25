import styled from 'styled-components';

export const IconDetailStyle = styled.div`
  min-width: 210px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e1e3e6;
  background-color: ${({ theme }) => theme.white};
  padding: 5px 10px;

  &:hover {
    background-color: #ccc;
  }
`;

export const TextContent = styled.p`
  line-height: 42px;
  font-size: 12px;
  margin-block: auto;
`;

export const ContentIcon = styled.div`
  display: flex;
`;

export const ImageStyle = styled.img`
  height: 32px;
  width: 32px;
  margin-block: auto;
`;

export const ImgArrow = styled.img`
  height: 15px;
  width: 15px;
  margin-block: auto;
`;
