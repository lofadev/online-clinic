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
  HeroContentStyled,
  HeroIconStyled,
  HeroImageStyled,
  HeroInfoBoxStyled,
  HeroInfoStyled,
  HeroSectionStyled,
  HeroSubtitleStyled,
  HeroTitleStyled,
  ImageStyleStyled,
  MainTextStyled,
  OverlayStyled,
  SlidersStyled,
  SubTextStyled,
  TextContainerStyled,
  TitleStyled,
  VideoWrapperStyled,
  WrapperStyled,
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
    <WrapperStyled>
      <HeroSectionStyled>
        <HeroContentStyled>
          <HeroImageStyled src={HeadingTopPageSgv} alt="image" />
          <HeroTitleStyled>PCやタブレット、スマホで、スキマ時間に医師の診察！</HeroTitleStyled>
          <HeroSubtitleStyled>
            <HeroIconStyled src={IllustMvIcon} alt="image" />
            <div>
              <HeroInfoStyled>
                <p>オンライン診療</p>
                <p>受付時間</p>
              </HeroInfoStyled>

              <HeroInfoBoxStyled>
                <img src={Clock} alt="icon" />
                <TextContainerStyled>
                  <MainTextStyled>24時間対応</MainTextStyled>
                  <SubTextStyled>※年末年始を除く</SubTextStyled>
                </TextContainerStyled>
              </HeroInfoBoxStyled>
            </div>
          </HeroSubtitleStyled>
        </HeroContentStyled>
        <VideoWrapperStyled>
          <TitleStyled>テレビCMをCheck！</TitleStyled>
          <Video data={videoData} />
        </VideoWrapperStyled>
      </HeroSectionStyled>

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
    </WrapperStyled>
  );
};
