import styled from 'styled-components';

export const IconStyle = styled.div`
  width: 55px;
  height: 50px;
  margin-inline: auto;
  position: relative;

  &.nonExtendIcon:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &.extendIcon:hover {
    cursor: pointer;
    background-color: #f2f4f7;
    z-index: 10;
    & > .secondIcon {
      display: flex;
    }
  }

  &.extendIcon {
  }
`;

export const ImageStyle = styled.img`
  height: 32px;
  width: 32px;
  margin-block: 7px;
`;

export const ImgLogout = styled.img`
  height: 32px;
  width: 32px;
`;

export const SecondIcon = styled.div`
  padding: 25px;
  position: absolute;
  display: none;
  flex-direction: column;
  top: 50px;
  right: 0;
  background-color: #f2f4f7;
`;

export const LogoutButton = styled.div`
  height: 32px;
  display: flex;
  justify-content: end;
  margin-top: 10px;

  &:hover {
    opacity: 0.5;
  }
`;

export const TextLogout = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 32px;
`;
