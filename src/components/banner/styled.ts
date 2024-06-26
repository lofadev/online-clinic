import { ArrowWhiteLeftIcon, ArrowWhiteRightIcon } from 'assets';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  background-color: #13c4ce;
  padding-top: 48px;
`;

export const HeroSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1020px;
  margin: 0 auto;
`;

export const HeroContentStyled = styled.div``;

export const HeroImageStyled = styled.img`
  width: 342px;
`;

export const HeroTitleStyled = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  margin: 20px 0 18px 0;
`;

export const HeroSubtitleStyled = styled.div`
  position: relative;
  display: inline-block;
  > div {
    display: flex;
    align-items: flex-start;
    padding: 8px 20px 8px 120px;
    margin-top: 53px;
    border-radius: 5px;
    background-color: #fff;
  }
`;

export const HeroIconStyled = styled.img`
  position: absolute;
  width: fit-content;
  bottom: 0;
  left: 12px;
`;

export const HeroInfoStyled = styled.div`
  padding-right: 20px;
  p {
    color: #3f4f5f;
    font-weight: 700;
    text-align: center;
    font-size: 20px;
    &:first-child {
      margin-bottom: 8px;
      font-size: 16px;
    }
  }
`;

export const HeroInfoBoxStyled = styled.div`
  display: flex;
  position: relative;
  padding-left: 20px;

  > img {
    width: 26px;
    height: 26px;
    margin: 0 8px 6px 0;
  }

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 48px;
    background-color: #c5c6d0;
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TextContainerStyled = styled.div``;
export const MainTextStyled = styled.div`
  font-size: 22px;
  color: #03afb9;
  font-weight: 700;
`;

export const SubTextStyled = styled.p`
  margin-top: 10px;
  text-align: end;
  font-size: 10px;
  color: #8e909e;
`;

export const VideoWrapperStyled = styled.div`
  padding: 6px;
  background-color: #fff;
  border-radius: 6px;
  margin: 0px 14px;
  height: fit-content;
`;

export const TitleStyled = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #03afb9;
  margin: 0 0 6px 0;
  text-align: center;
`;

export const SlidersStyled = styled.div`
  padding: 32px 0 4px 0;
  margin: 0;

  height: auto;
  .swiper-slide {
    max-width: 330px;
    height: auto;
  }
  .swiper-wrapper {
    padding-bottom: 28px;
  }

  .swiper-button-prev {
    width: 50px;
    height: 50px;
    left: 16.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 61%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: rgba(63, 79, 95, 0.6);
    &::after {
      content: '';
      width: 10px;
      height: 18px;
      background-image: url(${ArrowWhiteLeftIcon});
    }
  }

  .swiper-button-next {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 61%;
    right: 18.3%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: rgba(63, 79, 95, 0.6);

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
    background-color: #3f4f5f;
  }

  @media (max-width: 992px) {
    .swiper-button-prev {
      left: 4%;
    }

    .swiper-button-next {
      right: 5.4%;
    }
  }
`;

export const ImageStyleStyled = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const CardItemStyled = styled.div`
  position: relative;
  height: 190px;

  &:hover {
    cursor: pointer;
    > p {
      opacity: 0.5;
    }
  }
`;

export const OverlayStyled = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
`;
