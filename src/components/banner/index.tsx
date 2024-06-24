import { FC } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from 'assets/images/banner/slide_image1.png';
import image2 from 'assets/images/banner/slide_image2.png';
import image3 from 'assets/images/banner/slide_image3.png';
import image4 from 'assets/images/banner/slide_image4.png';
import image5 from 'assets/images/banner/slide_image5.png';
import { Clock, HeadingTopPageSgv, IllustMvIcon } from 'assets';

import { Video, VideoType } from '../videocustom';

import {
  CardItemStyled,
  HeroContent,
  HeroIcon,
  HeroImage,
  HeroInfo,
  HeroInfoBox,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  ImageStyleStyled,
  MainText,
  OverlayStyled,
  SlidersStyled,
  SubText,
  TextContainer,
  TitleStyled,
  VideoWrapperStyled,
  Wrapper,
} from './styled';

type ImageType = {
  id: number;
  url: string;
};

const videoData: VideoType = {
  src: 'https://player.vimeo.com/video/949855460',
  width: 436,
  height: 245,
};

const imageList: ImageType[] = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 3,
    url: image4,
  },
  {
    id: 5,
    url: image5,
  },
];

export const Banner: FC = () => {
  return (
    <Wrapper>
      <HeroSection>
        <HeroContent>
          <HeroImage src={HeadingTopPageSgv} alt="image" />
          <HeroTitle>PCやタブレット、スマホで、スキマ時間に医師の診察！</HeroTitle>
          <HeroSubtitle>
            <HeroIcon src={IllustMvIcon} alt="image" />
            <div>
              <HeroInfo>
                <p>オンライン診療</p>
                <p>受付時間</p>
              </HeroInfo>

              <HeroInfoBox>
                <img src={Clock} alt="icon" />
                <TextContainer>
                  <MainText>24時間対応</MainText>
                  <SubText>※年末年始を除く</SubText>
                </TextContainer>
              </HeroInfoBox>
            </div>
          </HeroSubtitle>
        </HeroContent>
        <VideoWrapperStyled>
          <TitleStyled>テレビCMをCheck！</TitleStyled>
          <Video data={videoData} />
        </VideoWrapperStyled>
      </HeroSection>

      <SlidersStyled>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          spaceBetween={8}
          slidesPerView="auto"
          slidesOffsetBefore={1000}
          updateOnWindowResize={false}
          pagination={{
            clickable: true,
          }}
          centeredSlides
          loop
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {imageList.map((item) => (
            <SwiperSlide key={item.id}>
              <CardItemStyled>
                <OverlayStyled />
                <Link to="#">
                  <ImageStyleStyled src={item.url} alt="image" />
                </Link>
              </CardItemStyled>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlidersStyled>
    </Wrapper>
  );
};
