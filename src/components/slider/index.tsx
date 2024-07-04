import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
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
  gender: GenderType;
};

export const CardSlider: React.FC<SliderType> = ({ data, gender }) => {
  const { t } = useTranslation();
  return (
    <WrapperStyled gender={gender}>
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
                  <JobStyled gender={item.gender}>{t(item.job)}</JobStyled>
                  <p>{item.name}</p>
                </PositionStyled>
              </InfoBlockStyled>
              <DescriptionStyled>{t(item.description)}</DescriptionStyled>
            </CardItemStyled>
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapperStyled>
  );
};
