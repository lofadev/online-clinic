import styled from 'styled-components';

export const IconDetailStyle = styled.div`
  min-width: 250px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e1e3e6;
  background-color: white;
  padding: 5px;

  &:hover {
    background-color: #ccc;
  }
`;

export const TextContent = styled.p`
  line-height: 42px;
`;

export const ContentIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageStyle = styled.img`
  height: 42px;
  width: 42px;
`;

export const ImgArrow = styled.img`
  height: 15px;
  width: 15px;
  margin-block: auto;
`;
