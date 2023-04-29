import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const itemStyles = {
  width: '150px',
  height: '100px',
  display: 'block',
  margin: 'auto',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  aspectRatio: '3/2',
  objectFit: 'contain',
  filter: 'brightness(0) invert(1)',
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselBlock = ({ data }) => {
  return (
    <Box bgcolor={'black'}>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //  autoPlay={true}
        autoPlaySpeed={1000}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass='carousel-item-padding-40-px'
      >
        {data?.Item?.map((item: any, index: number) => {
          const { url } = item?.Image?.data?.attributes;
          return (
            <Box
              key={item.id}
              style={{
                ...itemStyles,
              }}
            >
              <img
                src={`${process.env.STRAPI_CMS_URL}${url}`}
                alt={`image ${index}`}
                style={imgStyle}
              />
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselBlock;
