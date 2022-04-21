/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { ComponentCommonCarousel } from "graphql/types";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Slider from "react-slick";
import { Typography } from "@mui/material";

type Props = {
  data: ComponentCommonCarousel;
};
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CarouselBlock = (props: Props) => {
  //TODO : Complete this component
  const items = props.data.Item;
  const slider = React.useRef<Slider>(null);
  const onPreviousSlider = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };
  const onNextSlider = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };
  return (
    <BlockWrapper>
      <SliderContainer>
        <SliderArrowLeft onClick={onPreviousSlider}>
          <ArrowLeftIcon fontSize="large" />
        </SliderArrowLeft>
        <SliderArrowRight onClick={onNextSlider}>
          <ArrowRightIcon fontSize="large" />
        </SliderArrowRight>
        <Slider {...settings} ref={slider}>
          {items.map((_item, _i) =>
            <Box key={_i}>
              <Box display="flex" alignItems="center">
                <Box position='relative' width={50} height={50} mr={3}>
                  <img src={`${process.env.STRAPI_CMS_URL}${_item.Image.data.attributes.url}`} alt='' width="100%" />
                </Box>
                <Box flex={1}>
                  <Typography variant='h6'>{_item.TitleText}</Typography>
                  <Typography variant='body1'>{_item.Description}</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Slider>
      </SliderContainer>
    </BlockWrapper>
  );
};

export default CarouselBlock;

const BlockWrapper = styled(Box)(() => ({
  padding: "40px 0"
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  ".slick-slider": {
    margin: "0 auto",
  },
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    padding: "0 35px",
  },
}));
const SliderArrowLeft = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: -30,
  cursor: "pointer",
  height: '100%',
  display: "flex",
  alignItems: "center",
}));
const SliderArrowRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: -30,
  cursor: "pointer",
  height: '100%',
  display: "flex",
  alignItems: "center",
}));
