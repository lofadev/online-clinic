import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  WrapperStyled,
  CardItemStyled,
  InfoBlockStyled,
  AvatarStyled,
  PositionStyled,
  DescriptionStyled,
  JobStyled,
} from './styled';
import { IMedicationCard } from './type';

type SliderType = {
  data: IMedicationCard[];
};

export const CardSlider: React.FC<SliderType> = ({ data }) => {
  return (
    <WrapperStyled>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        spaceBetween={20}
        slidesPerView="auto"
        slidesOffsetBefore={1000}
        speed={1000}
        updateOnWindowResize={false}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardItemStyled>
              <InfoBlockStyled>
                <AvatarStyled src={item.avatar} alt="avatar" />
                <PositionStyled>
                  <JobStyled gender={item.gender}>{item.job}</JobStyled>
                  <p>{item.name}</p>
                </PositionStyled>
              </InfoBlockStyled>
              <DescriptionStyled>{item.description}</DescriptionStyled>
            </CardItemStyled>
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapperStyled>
  );
};
