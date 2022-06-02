import { useRef } from 'react';
import { ComponentCommonCarousel } from "graphql/types";
import { Box, Icon, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {

  const carouselRef = useRef();

  const scrollLeft = () => {
    carouselRef?.current?.scroll({left: (carouselRef?.current?.scrollLeft || 0) - 150, behavior: "smooth"});
  }

  const scrollRight = () => {
    carouselRef?.current?.scroll({left: (carouselRef?.current?.scrollLeft || 0) + 150, behavior: "smooth"});
  }

  //TODO : Complete this component
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <IconButton onClick={scrollLeft}><ArrowBackIosIcon /></IconButton>
      <div
        ref={carouselRef}
        style={{
          marginTop: 50,
          display: "flex",
          height: 100,
          overflowX: "scroll"
        }}
      >
        {
          data?.Item?.map((item, index) => {
            const image = item?.Image?.data?.attributes;
            return (
              image?.url &&
              <img
                key={index.toString()}
                src={`${process.env.STRAPI_CMS_URL}${image.url}`}
                width={image?.width * 100 / image?.height}
              />
            );
          })
        }
      </div>
      <IconButton onClick={scrollRight}><ArrowForwardIosIcon /></IconButton>
    </div>
  );
};

export default CarouselBlock;
