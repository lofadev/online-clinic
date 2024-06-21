import styled from 'styled-components';
import ArrowWhiteLeftIcon from 'assets/svgs/ico_arrow_white_left.svg';
import ArrowWhiteRightIcon from 'assets/svgs/ico_arrow_white_right.svg';
import { JobStyleProps } from './type';

export const WrapperStyled = styled.div`
  height: auto;
  font-size: 14px;
  margin-top: 32px;

  .swiper-slide {
    max-width: 314px;
    height: auto;
  }

  .swiper-wrapper {
    padding-bottom: 40px;
    transition-duration: 1ms;
  }

  .swiper-button-prev {
    left: 12%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(63, 79, 95, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
    &::after {
      content: '';
      width: 10px;
      height: 18px;
      background-image: url(${ArrowWhiteLeftIcon});
    }
  }

  .swiper-button-next {
    right: 12%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(63, 79, 95, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
    &::after {
      content: '';
      width: 10px;
      height: 18px;
      background-image: url(${ArrowWhiteRightIcon});
    }
  }

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #094591;
  }
`;

export const CardItemStyled = styled.div`
  padding: 20px;
  border-radius: 8px;
  height: 243px;
  overflow: hidden;
  background-color: #fff;
  &:hover {
    cursor: text;
  }
`;

export const InfoBlockStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarStyled = styled.img`
  width: 61px;
  height: 62px;
`;

export const PositionStyled = styled.div`
  margin-left: 20px;

  > p {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
  }
`;

export const JobStyled = styled.span<JobStyleProps>`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme, gender }) => (gender ? theme.secondary : theme.tertiary)};
`;

export const DescriptionStyled = styled.p`
  margin: 16px 0 20px 0;
  font-weight: 500;
  line-height: 21px;
`;
