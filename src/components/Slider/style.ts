import styled from 'styled-components';
import ArrowLeftUrl from './assets/ico_arrow_white_left.svg';
import ArrowRightUrl from './assets/ico_arrow_white_right.svg';

const Wrapper = styled.div`
  font-family:
    Noto Sans JP,
    sans-serif;

  p,
  ul {
    margin: 0;
    padding: 0;
  }

  height: auto;
  font-size: 14px;
  margin-top: 32px !important;

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
      background-image: url(${ArrowLeftUrl});
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
      background-image: url(${ArrowRightUrl});
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

const CardItem = styled.div`
  padding: 20px;
  border-radius: 8px;
  height: 243px;
  overflow: hidden;
  background-color: #fff;
  &:hover {
    cursor: text;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 61px;
  height: 62px;
`;

const Position = styled.div`
  margin-left: 20px;

  > span {
    font-size: 12px;
    font-weight: 700;
  }
  > p {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin: 16px 0 20px 0 !important;
  font-weight: 500;
  flex: 1;
`;

export { Wrapper, CardItem, InfoBlock, Avatar, Position, Description };
