import styled from 'styled-components';

export const MainStyled = styled.div`
  margin-top: 24px;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TitleSlider = styled.span`
  font-size: 15px;
`;

export const SliderStyled = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #8e8e8e;
`;

export const ActiveSlider = styled.div<{ widthActive: string }>`
  position: absolute;
  top: 0;
  width: ${(props) => props.widthActive};
  height: 10px;
  border-radius: 10px;
  background-color: #0052d4;
`;

export const Circle = styled.div`
  border-radius: 50%;
  background-color: #0052d4;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -4px;
  right: 0;
`;
