import styled from 'styled-components';

export const FlowItemStyle = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  min-height: 253px;
  margin: 20px;

  &.male {
    & > .imageShow > .id-flow {
      background-color: #1651b0;
    }

    & > .content-flow > .title-flow {
      color: #1651b0;
    }
  }

  &.female {
    & > .imageShow > .id-flow {
      background-color: #f35f71;
    }

    & > .content-flow > .title-flow {
      color: #f35f71;
    }
  }

  &.general {
    & > .imageShow > .id-flow {
      background-color: #13c4ce;
    }

    & > .content-flow > .title-flow {
      color: #13c4ce;
    }
  }
`;

export const ImageShow = styled.div`
  position: relative;
`;

export const Count = styled.div`
  position: absolute;
  font-size: 28px;
  font-weight: 700px;
  color: #ffffff;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  top: 0px;
  left: 0px;
`;

export const ContentFlow = styled.div`
  padding: 20px 36px;
`;

export const TitleFlow = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #686975;
  text-align: center;
  margin-top: 8px;
  padding-inline: 20px;
  line-height: 20px;
`;

export const ImageStyle = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 324px;
  height: 140px;
`;
