import { ComponentCommonCarousel } from "graphql/types";
import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import getImageUrl from "lib/shared";

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data: { Item } }: Props) => {
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
        {Item.map((item, index) => {
          return (
            <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={getImageUrl(item.Image.data.attributes.url)}
                width={150}
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
