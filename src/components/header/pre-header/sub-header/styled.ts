import styled from 'styled-components';

export const SubHeaderStyle = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  padding-inline: 16vw;
  position: absolute;
  left: 0;
  display: none;
  z-index: 5;
`;
export const ButtonGender = styled.div`
  margin-block: auto;
`;
export const ButtonStyleGender = styled.div`
  display: flex;
  position: relative;
  border-radius: 8px;
  height: 60px;
  width: 200px;
  justify-content: end;
  padding-right: 20px;
  margin: 28px 40px;
  &.male {
    border: 2px solid #094591;
    color: #094591;
  }

  &.female {
    border: 2px solid #f35f71;
    color: #f35f71;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
export const ContentButton = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-block: auto;
`;
export const ImageStyle = styled.img`
  position: absolute;
  height: 71px;
  width: 77px;
  top: -14px;
  left: 13px;
`;
export const ArrowImage = styled.img`
  width: 6px;
  height: 10px;
  margin-block: auto;
  margin-left: 15px;
`;
export const DetailNavigateBox = styled.div`
  width: 744px;
  margin: 40px 0;
  padding-inline: 40px;
  border-left: 1px solid #c5c6d0;
`;
export const TitleDetailNav = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #3f4f5f;
  line-height: 24px;
  margin-block: 10px;
`;
