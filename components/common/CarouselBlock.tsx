import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import { ComponentCommonCarousel } from "graphql/types";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

type Props = {
  data: ComponentCommonCarousel;
};

const CarouselBlock = ({ data }: Props) => {
  return (
    <Box bgcolor="#444" paddingY={4} paddingX={5}>
      <Carousel responsive={responsive}>
        {data.Item.map((item, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Image src={process.env.STRAPI_CMS_URL + item.Image.data.attributes.url} layout="intrinsic" width={100} height={80}  />
            <Box paddingLeft={2}>
              <Typography color="#fff" variant="h5">{item.TitleText}</Typography>
              <Typography color="#fff" align="center">{item.ButtonText}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselBlock;
