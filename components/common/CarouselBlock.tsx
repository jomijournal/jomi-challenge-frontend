import { IconButton, Stack, Typography } from "@mui/material";
import { ComponentCommonCarousel } from "graphql/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Swiper as SwiperInstance } from "swiper";
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';

import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { getStrapiImageUrl } from "lib/image";
import { useCallback, useState } from "react";

type Props = {
  data: ComponentCommonCarousel;
};

const CarouselBlock = ({ data: { Item = [] } }: Props) => {
  const [swiperPosition, setSwiperPosition] = useState<'begining' | 'end' | 'mid'>('begining')
  const onActiveIndexChange = useCallback((swiper: SwiperInstance) => {
    if (swiper.isBeginning) {
      return setSwiperPosition('begining')
    }
    if (swiper.isEnd) {
      return setSwiperPosition('end')
    }
    setSwiperPosition('mid')
  }, [])

  return (
    <Stack color="white" spacing={2} paddingY={3} paddingX={6} sx={{
      background: '#272727'
    }}>
      <Typography>Subscribing institutions:</Typography>
      <Stack direction="row">
        <IconButton className="CarouselBlock__Swiper__Prev">
          <ArrowLeftSharpIcon fontSize="large" sx={{
            stroke: '#fff',
            fill: swiperPosition === 'begining' ? '#fff' : undefined
          }} />
        </IconButton>
        <Swiper
          onActiveIndexChange={onActiveIndexChange}
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation]}
          navigation={{
            nextEl: ".CarouselBlock__Swiper__Next",
            prevEl: ".CarouselBlock__Swiper__Prev"
          }}
          freeMode
        >
          {Item.map(item => (
            <SwiperSlide key={item.id} style={{
              width: "fit-content"
            }}>
              <Image
                width={item.Image?.data?.attributes?.width}
                height={80}
                src={getStrapiImageUrl(item.Image?.data?.attributes?.url)}
                alt={item.Image?.data?.attributes?.alternativeText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton className="CarouselBlock__Swiper__Next">
          <ArrowRightSharpIcon fontSize="large" sx={{
            stroke: '#fff',
            fill: swiperPosition === 'end' ? '#fff' : undefined
          }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default CarouselBlock;
