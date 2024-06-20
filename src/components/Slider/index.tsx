import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Avatar, CardItem, Description, InfoBlock, Position, Wrapper } from './style';
import { IMedicationCard } from './type';

type SliderType = {
  data?: IMedicationCard[];
};

export const CardSlider: React.FC<SliderType> = ({ data }) => {
  return (
    <Wrapper>
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
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <CardItem>
              <InfoBlock>
                <Avatar src={item.avatar} alt="avatar" />
                <Position>
                  <span
                    style={
                      item.gender
                        ? {
                            color: '#09519f',
                          }
                        : { color: '#f35f71' }
                    }
                  >
                    {item.job}
                  </span>
                  <p>{item.name}</p>
                </Position>
              </InfoBlock>
              <Description>{item.description}</Description>
            </CardItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
