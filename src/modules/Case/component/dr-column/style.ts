import styled from 'styled-components';

export const DrColumnStyle = styled.div`
  display: flex;
  width: 860px;
  margin: 20px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.5;
  }
`;

export const ImageBox = styled.div`
  margin-right: 24px;
`;

export const ImageStyle = styled.img`
  width: 240px;
  height: 160px;
`;

export const ContentDrColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 596px;
`;

export const TitleDrColumn = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #3f4f5f;
  line-height: 30px;
`;

export const ContentDrColumnDetail = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #686975;
  line-height: 24px;
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

export const InforContent = styled.div`
  display: flex;
  color: #8e909e;
  font-size: 10px;
  font-weight: 400;
`;

export const Siekte = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #03afb9;
  border: #03afb9 solid 1px;
  padding: 5px 15px;
`;

export const ContentDate = styled.div`
  margin-right: 12px;
`;

export const ContentConfirm = styled.div``;
