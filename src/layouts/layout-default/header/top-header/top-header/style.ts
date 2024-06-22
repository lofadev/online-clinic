import styled from 'styled-components';

export const TopHeaderStyle = styled.div`
  margin-inline: 5px;
  border-bottom: 1px solid #e1e3e6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftTopHeader = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
`;

export const ImageIcon = styled.img`
  height: 60px;
  border-right: 1px solid #e1e3e6;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageLogo = styled.img`
  height: 42px;
  margin-block: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const RightTopHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
