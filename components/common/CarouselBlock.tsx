import Image from "next/image";

import { ComponentCommonCarousel } from "graphql/types";
import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";
import imageUrl from "lib/imageUrl";

type Props = {
  data: ComponentCommonCarousel;
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselBlock = ({ data: { Item } }: Props) => {
  //TODO : Complete this component
  return (
    <div>
      <Typography variant="h5" my={5}>
        Subscribing Institutions:{" "}
      </Typography>
      <Carousel
        autoPlay={false}
        keyBoardControl={true}
        ssr={true}
        infinite={true}
        responsive={responsive}
      >
        {Item.map((item) => {
          return (
            <Box
              key={item.Image.data.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={imageUrl(item.Image.data.attributes.url)}
                width={100}
                height={100}
                alt={item.TitleText}
              />
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselBlock;
