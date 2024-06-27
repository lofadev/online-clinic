import styled from 'styled-components';
import { IcoDotVertical } from 'assets';
import { TextProps } from '.';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HealthQueriesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QueryEntryStyled = styled.div`
  position: relative;

  &:nth-child(2) {
    margin: 0 60px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 194px;
    width: 194px;
    border: 2px solid #e5ecf6;
    border-radius: 50%;
    top: -10px;
    left: -10px;
  }
`;

export const BorderStyled = styled.div`
  position: absolute;
  height: 194px;
  width: 194px;
  border: 2px solid #e5ecf6;
  border-radius: 50%;
  top: -10px;
  left: -10px;
`;

export const QueryEntryTextStyled = styled.div`
  width: 190px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
`;

export const TextStyled = styled.p<TextProps>`
  font-size: 16px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: center;
  color: #094591;
  max-width: 145px;
  color: ${(prop) => (prop.gender ? ' #094591' : `${prop.theme.tertiary}`)};
`;

export const ImageStyled = styled.img`
  width: 90px;
  height: 127px;
  position: absolute;
  top: 33%;
  right: -40px;
`;

export const DotVerticalStylerd = styled.img`
  width: 5px;
  height: 35px;
  margin: 14px 0;
`;

export const MessageBlockStyled = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  line-height: 36px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 35px;
    margin: 14px auto;
    background-image: url(${IcoDotVertical});
  }
`;
