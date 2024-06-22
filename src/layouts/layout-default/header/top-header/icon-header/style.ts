import styled from 'styled-components';

export const IconStyle = styled.div`
  margin-inline: 15px;
  margin-block: auto;
  position: relative;

  &.nonExtendIcon:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &.extendIcon:hover {
    cursor: pointer;

    & > .ant-badge {
      background-color: #f2f4f7;
    }

    & > .secondIcon {
      display: flex;
    }
  }

  &.extendIcon {
  }
`;

export const ImageStyle = styled.img`
  height: 50px;
  width: 50px;
`;

export const ImgLogout = styled.img`
  height: 40px;
  width: 40px;
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
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 10px;

  &:hover {
    opacity: 0.5;
  }
`;

export const TextLogout = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 42px;
`;
